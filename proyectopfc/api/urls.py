from django.urls import path
from .views import PartidosLisCreateView,PartidosDetailView,UltimosResultadosLisCreateView,UltimosResultadosDetailView,ProximosEventosLisCreateView, ProximosEventosDetailView, JugadroresLisCreateView, JugadroresDetailView, BiografiaJugadorLisCreateView, BiografiaJugadorDetailView, UsuarioLisCreateView, UsuarioDetailView, MembresiaLisCreateView, MembresiaDetailView, MetodosPagoLisCreateView, MetodosPagoDetailView,  BoleteriaLisCreateView, BoleteriaDetailView, LocalidadesLisCreateView, LocalidadesDetailView, DetalleVentaLisCreateView, DetalleVentaDetailView, LocalidadDetalleVentaLisCreateView, LocalidadDetalleVentaDetailView, VentaLisCreateView, VentaDetailView


urlpatterns = [
    path('partidos/',PartidosLisCreateView.as_view(),name='partidos-listar-crear'),
    path('partidos/<int:pk>/',PartidosDetailView.as_view(), name='partidos-editar-actualizar'),
    path('ultimosResultados/',UltimosResultadosLisCreateView.as_view(),name='ultimosResultados-listar-crear'),
    path('ultimosResultados/<int:pk>/',UltimosResultadosDetailView.as_view(), name='ultimosResultados-editar-actualizar'),
    path('proximosEventos/',ProximosEventosLisCreateView.as_view(),name='proximosEventos-listar-crear'),
    path('proximosEventos/<int:pk>/',ProximosEventosDetailView.as_view(), name='proximosEventos-editar-actualizar'),
    path('jugadores/',JugadroresLisCreateView.as_view(),name='jugadores-listar-crear'),
    path('jugadores/<int:pk>/',JugadroresDetailView.as_view(), name='jugadores-editar-actualizar'),
    path('biografiaJugador/',BiografiaJugadorLisCreateView.as_view(),name='biografiaJugador-listar-crear'),
    path('biografiaJugador/<int:pk>/',BiografiaJugadorDetailView.as_view(), name='biografiaJugador-editar-actualizar'),
    path('usuario/',UsuarioLisCreateView.as_view(),name='usuario-listar-crear'),
    path('usuario/<int:pk>/',UsuarioDetailView.as_view(), name='usuario-editar-actualizar'),
    path('membresia/',MembresiaLisCreateView.as_view(),name='membresia-listar-crear'),
    path('membresia/<int:pk>/',MembresiaDetailView.as_view(), name='membresia-editar-actualizar'),
    path('metodosPago/',MetodosPagoLisCreateView.as_view(),name='metodosPago-listar-crear'),
    path('metodosPago/<int:pk>/',MetodosPagoDetailView.as_view(), name='metodosPago-editar-actualizar'),
    path('boleteria/',BoleteriaLisCreateView.as_view(),name='boleteria-listar-crear'),
    path('boleteria/<int:pk>/',BoleteriaDetailView.as_view(), name='boleteria-editar-actualizar'),
    path('localidades/',LocalidadesLisCreateView.as_view(),name='localidades-listar-crear'),
    path('localidades/<int:pk>/',LocalidadesDetailView.as_view(), name='localidades-editar-actualizar'),
    path('detalleVenta/',DetalleVentaLisCreateView.as_view(),name='detalleVenta-listar-crear'),
    path('detalleVenta/<int:pk>/',DetalleVentaDetailView.as_view(), name='detalleVenta-editar-actualizar'),
    path('localidadDetalleVenta/',LocalidadDetalleVentaLisCreateView.as_view(),name='localidadDetalleVenta-listar-crear'),
    path('localidadDetalleVenta/<int:pk>/',LocalidadDetalleVentaDetailView.as_view(), name='localidadDetalleVenta-editar-actualizar'),
    path('venta/',VentaLisCreateView.as_view(),name='venta-listar-crear'),
    path('venta/<int:pk>/',VentaDetailView.as_view(), name='venta-editar-actualizar')
]