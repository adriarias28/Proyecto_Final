from django.urls import path
from .views import PartidosListCreateView,PartidosDetailView,UltimosResultadosListCreateView,UltimosResultadosDetailView, ProximosEventosListCreateView, ProximosEventosDetailView, BiografiaJugadorListCreateView, BiografiaJugadorDetailView, UsuarioListCreateView, UsuarioDetailView, MembresiaListCreateView, MembresiaDetailView, MetodosPagoListCreateView, MetodosPagoDetailView, LocalidadesListCreateView, LocalidadesDetailView, DetalleVentaListCreateView, DetalleVentaDetailView, LocalidadDetalleVentaListCreateView, LocalidadDetalleVentaDetailView, VentaListCreateView, VentaDetailView
from .views import CustomTokenObtainPairView, UserGroupView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('partidos/',PartidosListCreateView.as_view(),name='partidos-listar-crear'),
    path('partidos/<int:pk>/',PartidosDetailView.as_view(), name='partidos-editar-actualizar'),
    path('ultimosResultados/',UltimosResultadosListCreateView.as_view(),name='ultimosResultados-listar-crear'),
    path('ultimosResultados/<int:pk>/',UltimosResultadosDetailView.as_view(), name='ultimosResultados-editar-actualizar'),
    path('proximosEventos/',ProximosEventosListCreateView.as_view(),name='proximosEventos-listar-crear'),
    path('proximosEventos/<int:pk>/',ProximosEventosDetailView.as_view(), name='proximosEventos-editar-actualizar'),
    path('biografiaJugador/',BiografiaJugadorListCreateView.as_view(),name='biografiaJugador-listar-crear'),
    path('biografiaJugador/<int:pk>/',BiografiaJugadorDetailView.as_view(), name='biografiaJugador-editar-actualizar'),
    path('usuario/',UsuarioListCreateView.as_view(),name='usuario-listar-crear'),
    path('usuario/<int:pk>/',UsuarioDetailView.as_view(), name='usuario-editar-actualizar'),
    path('membresia/',MembresiaListCreateView.as_view(),name='membresia-listar-crear'),
    path('membresia/<int:pk>/',MembresiaDetailView.as_view(), name='membresia-editar-actualizar'),
    path('metodosPago/',MetodosPagoListCreateView.as_view(),name='metodosPago-listar-crear'),
    path('metodosPago/<int:pk>/',MetodosPagoDetailView.as_view(), name='metodosPago-editar-actualizar'),
    path('localidades/',LocalidadesListCreateView.as_view(),name='localidades-listar-crear'),
    path('localidades/<int:pk>/',LocalidadesDetailView.as_view(), name='localidades-editar-actualizar'),
    path('detalleVenta/',DetalleVentaListCreateView.as_view(),name='detalleVenta-listar-crear'),
    path('detalleVenta/<int:pk>/',DetalleVentaDetailView.as_view(), name='detalleVenta-editar-actualizar'),
    path('localidadDetalleVenta/',LocalidadDetalleVentaListCreateView.as_view(),name='localidadDetalleVenta-listar-crear'),
    path('localidadDetalleVenta/<int:pk>/',LocalidadDetalleVentaDetailView.as_view(), name='localidadDetalleVenta-editar-actualizar'),
    path('venta/',VentaListCreateView.as_view(),name='venta-listar-crear'),
    path('venta/<int:pk>/',VentaDetailView.as_view(), name='venta-editar-actualizar'),
    path('usergroup/',UserGroupView.as_view(), name='usergroup-listar-crear'),
    #Tokens
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]