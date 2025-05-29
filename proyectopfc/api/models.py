from django.db import models
class Partidos (models.Model):
    Ubicacion = models.CharField(max_length=100, null=False)
    Fecha = models.DateField()
    Hora = models.TimeField  ()
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
class BiografiaJugador (models.Model):
    Nombre_Completo = models.CharField(max_length=100)
    Fecha_Nacimiento = models.DateField()
    Edad = models.CharField(max_length=100)
    Lugar_Nacimiento = models.CharField(max_length=100)
    Nacionalidad = models.CharField(max_length=100, null=False)
    Altura = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=1.75)
    Peso = models.DecimalField(max_digits=10, decimal_places=2)
    Numero = models.DecimalField(max_digits=10, decimal_places=2)
    Club_Actual = models.CharField(max_length=100)
    Pie_Dominante = models.CharField(max_length=100)
    Posicion = models.CharField(max_length=100)
    def __str__(self):
        return self.Nacionalidad
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
class Localidades (models.Model):
    Nombre = models.CharField(max_length=100)
    Precio = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return self.Nombre
class DetalleVenta (models.Model):
    Cantidad = models.CharField(max_length=100)
    Precio = models.DecimalField(max_digits=10, decimal_places=2)
    Localidades = models.ForeignKey(Localidades, on_delete=models.CASCADE, related_name="DetalleVenta")
    def __str__(self):
       return f"{self.id}"
class LocalidadDetalleVenta (models.Model):
    DetalleVenta = models.ForeignKey(DetalleVenta,on_delete=models.CASCADE, related_name='LocalidadDetalleVenta')
    Localidades = models.ForeignKey(Localidades,on_delete=models.CASCADE, related_name='LocalidadDetalleVenta')
    def __str__(self):
        return self.DetalleVenta
class Venta (models.Model):
    Precio_Total = models.DecimalField(max_digits=10, decimal_places=2)
    Usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="Venta")
    MetodosPago = models.ForeignKey(MetodosPago, on_delete=models.CASCADE, related_name="Venta")
    DetalleVenta = models.ForeignKey(DetalleVenta, on_delete=models.CASCADE, related_name="Venta")
    def __str__(self):
        return f"{self.Precio_Total}" #utilizamos f de formato, que nos va dejar utilizar un formato en tipo numero no solo string