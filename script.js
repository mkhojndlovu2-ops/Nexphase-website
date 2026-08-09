document.getElementById("quoteForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const contact=document.getElementById("contact").value.trim();
  const service=document.getElementById("service").value;
  const details=document.getElementById("details").value.trim();
  const message=`Hello NEXPHASE, I would like a quotation.%0A%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(details)}`;
  alert("Your enquiry is ready. Once your NEXPHASE WhatsApp number is added to the website, this button will open WhatsApp directly.");
});