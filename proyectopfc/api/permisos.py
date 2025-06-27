from rest_framework.permissions import BasePermission, IsAuthenticated, AllowAny

""" class IsAdminUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="admins").exists() """
    
class IsAdminUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and (
            request.user.is_superuser or
            request.user.groups.filter(name="admins").exists()
        )


class IsUsuariosUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="usuarios").exists()


