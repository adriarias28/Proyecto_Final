from django.db import models



class Partidos (models.Model):
    Ubicacion = models.CharField(max_length=100, null=False)
    Fecha = models.DateField()
    Hora = models.TimeField  (auto_now=True)
    Equipos = models.CharField(max_length=100)
    
    def __str__(self):
        return self.Ubicacion

class UltimosResultados (models.Model):
    Resultado = models.CharField(max_length=100)
    Partidos = models.ForeignKey(Partidos, on_delete=models.CASCADE, related_name="UltimosResultados")
    
    
    def __str__(self):
        return self.Resultado
    
class ProximosEventos (models.Model):
    Eventos = models.CharField(max_length=100)
    Descripcion = models.CharField(max_length=100)
    
    def __str__(self):
        return self.Eventos
    
class Jugadores (models.Model):
    Nombre = models.CharField(max_length=100)
    Apellido = models.CharField(max_length=100)
    Numero = models.DecimalField(max_digits=10, decimal_places=2)
    Puesto = models.CharField(max_length=100)
    Edad = models.CharField(max_length=100)
    Nacionalidad = models.CharField(max_length=100)
    
    def __str__(self):
        return self.Nombre, self.Apellido
    
class BiografiaJugador (models.Model):
    Descripcion = models.CharField(max_length=100)
    Jugadores = models.ForeignKey(Jugadores, on_delete=models.CASCADE, related_name="BiografiaJugador")
    
    def __str__(self):
        return self.Descripcion
    
class Usuario (models.Model):
    Nombre = models.CharField(max_length=100)
    Apellido = models.CharField(max_length=100)
    Email = models.CharField(max_length=100, unique=True)
    Contrasena = models.CharField(max_length=100)
    Telefono = models.CharField(max_length=100)
    
    def __str__(self):
        return self.Nombre, self.Apellido, self.Email
    
class Membresia (models.Model):
    Nombre = models.CharField(max_length=100)
    Usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="Membresia")
    
    def __str__(self):
        return self.Nombre
    
class MetodosPago (models.Model):
    NombreMetodo = models.CharField(max_length=100)
    
    def __str__(self):
        return self.NombreMetodo
    
class Boleteria (models.Model):
    Usuario = models.CharField(max_length=100)
    Pago = models.DecimalField(max_length=100, decimal_places=2)
    
    def __str__(self):
        return self.Usuario
    
class Localidades (models.Model):
    Nombre = models.CharField(max_length=100)
    Precio = models.DecimalField(max_length=100, decimal_places=2)
    
    def __str__(self):
        return self.Nombre
    
class DetalleVenta (models.Model):
    Cantidad = models.CharField(max_length=100)
    Precio = models.DecimalField(max_length=100, decimal_places=2)
    Localidades = models.ForeignKey(Localidades, on_delete=models.CASCADE, related_name="DetalleVenta")
    
    def __str__(self):
        return self.Precio
    
class LocalidadDetalleVenta (models.Model):
    DetalleVenta = models.ForeignKey(DetalleVenta,on_delete=models.CASCADE, related_name='LocalidadDetalleVenta')
    Localidades = models.ForeignKey(Localidades,on_delete=models.CASCADE, related_name='LocalidadDetalleVenta')
    
    def __str__(self):
        return self.DetalleVenta
    
class Venta (models.Model):
    Precio_Total = models.DecimalField(max_length=100, decimal_places=2)
    Usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="Venta")
    Boleteria = models.ForeignKey(Boleteria, on_delete=models.CASCADE, related_name="Venta")
    MetodosPago = models.ForeignKey(MetodosPago, on_delete=models.CASCADE, related_name="Venta")
    DetalleVenta = models.ForeignKey(DetalleVenta, on_delete=models.CASCADE, related_name="Venta")
    
    def __str__(self):
        return self.Boleteria