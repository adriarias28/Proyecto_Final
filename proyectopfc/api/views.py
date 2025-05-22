from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Partidos, UltimosResultados, ProximosEventos, Jugadores, BiografiaJugador, Usuario, Membresia, MetodosPago, Boleteria, Localidades, DetalleVenta, LocalidadDetalleVenta, Venta 
from .serializers import PartidosSerializer, UltimosResultadosSerializers, ProximosEventosSerializers, JugadoresSerializers, BiografiaJugadoresSerializers, UsuarioSerializers, MembresiaSerializers, MetodosPagoSerializers, BoleteriaSerializers, LocalidadesSerializers, DetalleVentaSerializers, LocalidadDetalleVentaSerializers, VentaSerializers

class PartidosListCreateView(ListCreateAPIView):
    queryset = Partidos.objects.all()
    serializer_class = PartidosSerializer

class PartidosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Partidos.objects.all()
    serializer_class = PartidosSerializer

class UltimosResultadosListCreateView(ListCreateAPIView):
    queryset = UltimosResultados.objects.all()
    serializer_class = UltimosResultadosSerializers

class UltimosResultadosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = UltimosResultados.objects.all()
    serializer_class = UltimosResultadosSerializers

class ProximosEventosListCreateView(ListCreateAPIView):
    queryset = ProximosEventos.objects.all()
    serializer_class = ProximosEventosSerializers
    
class ProximosEventosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = ProximosEventos.objects.all()
    serializer_class = ProximosEventosSerializers

class JugadoresListCreateView(ListCreateAPIView):
    queryset = Jugadores.objects.all()
    serializer_class = JugadoresSerializers

class JugadoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Jugadores.objects.all()
    serializer_class = JugadoresSerializers
    
class BiografiaJugadorListCreateView(ListCreateAPIView):
    queryset = BiografiaJugador.objects.all()
    serializer_class = BiografiaJugadoresSerializers

class BiografiaJugadorDetailView(RetrieveUpdateDestroyAPIView):
    queryset = BiografiaJugador.objects.all()
    serializer_class = BiografiaJugadoresSerializers
    
class UsuarioListCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers

class UsuarioDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers
    
class MembresiaListCreateView(ListCreateAPIView):
    queryset = Membresia.objects.all()
    serializer_class = MembresiaSerializers

class MembresiaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Membresia.objects.all()
    serializer_class = MembresiaSerializers

class MetodosPagoListCreateView(ListCreateAPIView):
    queryset = MetodosPago.objects.all()
    serializer_class = MetodosPagoSerializers

class MetodosPagoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = MetodosPago.objects.all()
    serializer_class = MetodosPagoSerializers

class BoleteriaListCreateView(ListCreateAPIView):
    queryset = Boleteria.objects.all()
    serializer_class = BoleteriaSerializers

class BoleteriaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Boleteria.objects.all()
    serializer_class = BoleteriaSerializers
    
class LocalidadesListCreateView(ListCreateAPIView):
    queryset = Localidades.objects.all()
    serializer_class = LocalidadesSerializers

class LocalidadesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Localidades.objects.all()
    serializer_class = LocalidadesSerializers
    
class DetalleVentaListCreateView(ListCreateAPIView):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializers

class DetalleVentaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializers
    
class LocalidadDetalleVentaListCreateView(ListCreateAPIView):
    queryset = LocalidadDetalleVenta.objects.all()
    serializer_class = LocalidadDetalleVentaSerializers

class LocalidadDetalleVentaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = LocalidadDetalleVenta.objects.all()
    serializer_class = LocalidadDetalleVentaSerializers
    
class VentaListCreateView(ListCreateAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializers

class VentaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializers