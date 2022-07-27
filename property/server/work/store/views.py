from django.shortcuts import render
from .models import Contact
from django.http import HttpResponse

def index(request):
    if request.method=="POST":
        contact=Contact()
        name=request.POST.get('name')
        number=request.POST.get('number')
        email=request.POST.get('email')
        subject=request.POST.get('subject')
        contact.name=name
        contact.number=number
        contact.email=email
        contact.subject=subject
        contact.save()
        return HttpResponse("<h1>thanks</h1>")




    return render(request,'index.html')
