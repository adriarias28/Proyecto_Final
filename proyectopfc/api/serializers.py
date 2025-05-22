from .models import Partidos, UltimosResultados, ProximosEventos, Jugadores, BiografiaJugador, Usuario, Membresia, MetodosPago, Boleteria, Localidades, DetalleVenta, LocalidadDetalleVenta, Venta 
from rest_framework import serializers

class PartidosSerializer(serializers.ModelSerializer):
    class Meta: 
        model=Partidos
        fields = '__all__'
        
    def validate_Ubicacion(self, value):
        if len(value) < 10: 
            raise serializers.ValidationError("La ubicaión tiene que ser mayor o igual a 10 caracteres")
        return value
        
class UltimosResultadosSerializers(serializers.ModelSerializer):
    partidos=PartidosSerializer(read_only=True)
    partidos_id= serializers.PrimaryKeyRelatedField(queryset=Partidos.objects.all(), source='Partidos' ,write_only=True)
    class Meta:
        model=UltimosResultados
        fields = '__all__'
    
class ProximosEventosSerializers(serializers.ModelSerializer):
    partidos=PartidosSerializer(read_only=True)
    partidos_id= serializers.PrimaryKeyRelatedField(queryset=Partidos.objects.all(), source='Partidos' ,write_only=True)
    class Meta: 
        model=ProximosEventos
        fields = '__all__'
        
    def validate_Evento(self, value):
        if len(value) < 10: 
            raise serializers.ValidationError("El evento tiene que ser mayor o igual a 10 caracteres")
        return value
        
    def validate_Equipos(self, value):
        if len(value) <= 3:
            raise serializers.ValidationError("El nombre del equipo tiene que tener un minimo de 3 letras")
        return value
        
class JugadoresSerializers(serializers.ModelSerializer):
    class Meta:
        model=Jugadores
        fields = '__all__'
        
    def validate_Nombre(self, value):
        if len(value) <= 3:
            raise serializers.ValidationError("El nombre del jugador tiene que tener un minimo de 3 letras")
        return value
    
    def validate_Edad(self, value):
        if int(value) <= 0:
            raise serializers.ValidationError("La edad debe ser un número positivo.")
        return value

class BiografiaJugadoresSerializers(serializers.ModelSerializer):
    jugadores=JugadoresSerializers(read_only=True)
    jugadores_id=serializers.PrimaryKeyRelatedField(queryset=Jugadores.objects.all(), source='Jugadores' ,write_only=True)
    class Meta:
        model=BiografiaJugador
        fields = '__all__'
        
class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields = '__all__'
    
    def validate_Nombre(self, value):
        if len(value) <= 3:
            raise serializers.ValidationError("El nombre de usuario tiene que tener un minimo de 3 letras")
        return value
    
    def validate_Email(self, value):
        if not ("@" in value and ".com" in value):
            raise serializers.ValidationError("El email no tiene el formato correcto")
        return value

class MembresiaSerializers(serializers.ModelSerializer):
    usuario=UsuarioSerializers(read_only=True)
    usuario_id=serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.all(), source='Usuario' ,write_only=True)
    class Meta:
        model=Membresia
        fields = '__all__'
        
class MetodosPagoSerializers(serializers.ModelSerializer):
    class Meta:
        model=MetodosPago
        fields = '__all__'
        
class BoleteriaSerializers(serializers.ModelSerializer):
    class Meta:
        model=Boleteria
        fields = '__all__'
        
class LocalidadesSerializers(serializers.ModelSerializer):
    class Meta:
        model=Localidades
        fields = '__all__'
        
class DetalleVentaSerializers(serializers.ModelSerializer):
    class Meta: 
        model=DetalleVenta
        fields = '__all__'
    
    def validate_Cantidad(self, value): 
        if value <= 1: 
            raise serializers.ValidationError("La cantidad tiene que ser igual o mayor a uno")
        return value
        
class LocalidadDetalleVentaSerializers(serializers.ModelSerializer):
    localidades=LocalidadesSerializers(read_only=True)
    localidades_id=serializers.PrimaryKeyRelatedField(queryset=Localidades.objects.all(), source='localidades' ,write_only=True)
    detalleventa=DetalleVentaSerializers(read_only=True)
    detalleventa_id=serializers.PrimaryKeyRelatedField(queryset=DetalleVenta.objects.all(), source='detalleventa' ,write_only=True)
    class Meta:
        model=LocalidadDetalleVenta
        fields = '__all__'
        
class VentaSerializers(serializers.ModelSerializer):
    usuario=UsuarioSerializers(read_only=True)
    usuario_id=serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.all(), source='usuario' ,write_only=True)
    boleteria=BoleteriaSerializers(read_only=True)
    boleteria_id=serializers.PrimaryKeyRelatedField(queryset=Boleteria.objects.all(), source='boleteria' ,write_only=True)
    metodospago=MetodosPagoSerializers(read_only=True)
    metodospago_id=serializers.PrimaryKeyRelatedField(queryset=MetodosPago.objects.all(), source='metodospago' ,write_only=True)
    detalleventa=DetalleVentaSerializers(read_only=True)
    detalleventa_id=serializers.PrimaryKeyRelatedField(queryset=DetalleVenta.objects.all(), source='detalleventa' ,write_only=True)
    class Meta:
        model=Venta
        fields = '__all__'

