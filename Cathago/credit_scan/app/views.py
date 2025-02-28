from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.contrib.auth import login,authenticate



def home(request):
    return render(request , 'profile.html')

def home2(request):
    return render(request , 'profile-2.html')

def upload(request):
    return render(request , 'upload.html')



User = get_user_model()



def register(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already exists"}, status=400)

        user = User.objects.create_user(
            email=email,
            password=password
        )
        return redirect("login")
    return render(request, "register.html")



from django.shortcuts import redirect, render

def login_view(request):
    if request.method == "POST":
        return redirect("home")  # Redirect to home page
    return render(request, "login.html")  # Render login page


from django.shortcuts import render
from .models import Document
from .utils import find_similar_documents

from django.shortcuts import render
from .models import Document
from .utils import find_similar_documents

def scan_document(request):
    if request.method == "POST":
        # text = request.POST.get("text")

        # if not text:
        #     return render(request, "scan.html", {"error": "No text provided"})

        # stored_docs = Document.objects.all()
        # similar_docs = find_similar_documents(text, stored_docs)

        return redirect("hoem")

    return render(request, "scan.html")

