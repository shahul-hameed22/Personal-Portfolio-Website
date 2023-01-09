from django.shortcuts import render
from portfolio.models import contact

# Create your views here.

def index(request):
    if request.method=='POST':
        name=request.POST.get("name")
        email_ID=request.POST.get("email")
        message=request.POST.get("message")

        contacts=contact(name=name,email_ID=email_ID,message=message)
        contacts.save()
# hello bro
    return render(request,'index.html')