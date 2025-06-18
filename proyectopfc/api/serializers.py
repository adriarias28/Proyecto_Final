from .models import Partidos, UltimosResultados, ProximosEventos, BiografiaJugador, Usuario, Membresia, MetodosPago, Localidades, DetalleVenta, LocalidadDetalleVenta, Venta
from rest_framework import serializers
from django.contrib.auth.models import User

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
        model = UltimosResultados
        fields = ['id', 'Resultado', 'partidos', 'partidos_id']
        
class ProximosEventosSerializers(serializers.ModelSerializer):
    class Meta: 
        model=ProximosEventos
        fields = '__all__'
        
    def validate_Eventos(self, value):
        if len(value) < 10: 
            raise serializers.ValidationError("El evento tiene que ser mayor o igual a 10 caracteres")
        return value

class BiografiaJugadoresSerializers(serializers.ModelSerializer):
    class Meta:
        model=BiografiaJugador
        fields = '__all__'

    def validate_Nombre_Completo(self, value):
        if len(value) <= 3:
            raise serializers.ValidationError("El nombre del jugador tiene que tener un minimo de 3 letras")
        return value

    def validate_Edad(self, value):
        if int(value) <= 0:
            raise serializers.ValidationError("La edad debe ser un número positivo.")
        return value

"""class UsuarioSerializers(serializers.ModelSerializer):
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
        return value"""

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = '__all__'

        
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
        

class MembresiaSerializers(serializers.ModelSerializer):
    usuario=UserSerializers(read_only=True)
    usuario_id=serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), source='User' ,write_only=True)
    class Meta:
        model=Membresia
        fields = '__all__'
        
        
class MetodosPagoSerializers(serializers.ModelSerializer):
    class Meta:
        model=MetodosPago
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
    localidades_id=serializers.PrimaryKeyRelatedField(queryset=Localidades.objects.all(), source='Localidades' ,write_only=True)
    detalleventa=DetalleVentaSerializers(read_only=True)
    detalleventa_id=serializers.PrimaryKeyRelatedField(queryset=DetalleVenta.objects.all(), source='DetalleVenta' ,write_only=True)
    class Meta:
        model=LocalidadDetalleVenta
        fields = ['localidades', 'localidades_id', 'detalleventa', 'detalleventa_id']

        
class VentaSerializers(serializers.ModelSerializer):
    usuario=UserSerializers(read_only=True)
    usuario_id=serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), source='User' ,write_only=True)
    metodospago=MetodosPagoSerializers(read_only=True)
    metodospago_id=serializers.PrimaryKeyRelatedField(queryset=MetodosPago.objects.all(), source='MetodosPago' ,write_only=True)
    detalleventa=DetalleVentaSerializers(read_only=True)
    detalleventa_id=serializers.PrimaryKeyRelatedField(queryset=DetalleVenta.objects.all(), source='DetalleVenta' ,write_only=True)
    class Meta:
        model=Venta
        fields = ['Precio_Total','detalleventa','detalleventa_id','metodospago','metodospago_id', 'usuario', 'usuario_id'] #Cuando hay id no podemos poner all, tenemos que abrir corchetes y agregarlos con comillas