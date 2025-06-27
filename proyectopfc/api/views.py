from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from .models import Partidos, UltimosResultados, ProximosEventos, BiografiaJugador, Usuario, Membresia, MetodosPago, Localidades, DetalleVenta, LocalidadDetalleVenta, Venta 
from .serializers import PartidosSerializer, UltimosResultadosSerializers, ProximosEventosSerializers, BiografiaJugadoresSerializers, UserSerializers, MembresiaSerializers, MetodosPagoSerializers, LocalidadesSerializers, DetalleVentaSerializers, LocalidadDetalleVentaSerializers, VentaSerializers, UserGroupSerializers
from django.contrib.auth.models import User

from .permisos import *

UserGroup = User.groups.through

class UserGroupView(ListCreateAPIView):
    queryset = UserGroup.objects.all()
    serializer_class = UserGroupSerializers
    

class PartidosListCreateView(ListCreateAPIView):
    queryset = Partidos.objects.all()
    serializer_class = PartidosSerializer


class PartidosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Partidos.objects.all()
    serializer_class = PartidosSerializer
    permission_classes = [IsAuthenticated, IsAdminUserGroup]
    

class UltimosResultadosListCreateView(ListCreateAPIView):
    queryset = UltimosResultados.objects.all()
    serializer_class = UltimosResultadosSerializers
    

class UltimosResultadosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = UltimosResultados.objects.all()
    serializer_class = UltimosResultadosSerializers
    permission_classes = [IsAuthenticated, IsAdminUserGroup]
    

class ProximosEventosListCreateView(ListCreateAPIView):
    queryset = ProximosEventos.objects.all()
    serializer_class = ProximosEventosSerializers
    
class ProximosEventosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = ProximosEventos.objects.all()
    serializer_class = ProximosEventosSerializers
    permission_classes = [IsAuthenticated, IsAdminUserGroup]
    
class BiografiaJugadorListCreateView(ListCreateAPIView):
    queryset = BiografiaJugador.objects.all()
    serializer_class = BiografiaJugadoresSerializers
    

class BiografiaJugadorDetailView(RetrieveUpdateDestroyAPIView):
    queryset = BiografiaJugador.objects.all()
    serializer_class = BiografiaJugadoresSerializers
    permission_classes = [IsAuthenticated, IsAdminUserGroup]
    
class UsuarioListCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [AllowAny]
    
class UsuarioListCreateViewDos(ListAPIView):
    queryset = User.objects
    serializer_class = UserSerializers
    permission_classes = [IsAuthenticated]

class UsuarioDetailView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [IsAuthenticated]
    
    
class MembresiaListCreateView(ListCreateAPIView):
    queryset = Membresia.objects.all()
    serializer_class = MembresiaSerializers

class MembresiaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Membresia.objects.all()
    serializer_class = MembresiaSerializers
    permission_classes = [IsAuthenticated, IsAdminUserGroup]

class MetodosPagoListCreateView(ListCreateAPIView):
    queryset = MetodosPago.objects.all()
    serializer_class = MetodosPagoSerializers

class MetodosPagoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = MetodosPago.objects.all()
    serializer_class = MetodosPagoSerializers
    
class LocalidadesListCreateView(ListCreateAPIView):
    queryset = Localidades.objects.all()
    serializer_class = LocalidadesSerializers

class LocalidadesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Localidades.objects.all()
    serializer_class = LocalidadesSerializers
    permission_classes = [IsAuthenticated, IsAdminUserGroup]
    
class DetalleVentaListCreateView(ListCreateAPIView):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializers

class DetalleVentaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializers
    permission_classes = [IsAuthenticated, IsAdminUserGroup]
    
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
    
#Token 
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    
    
    