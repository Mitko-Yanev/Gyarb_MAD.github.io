var random = new Array()

random[0] = "https://docs.google.com/forms/d/e/1FAIpQLSfDy-Y6S5-r9sFpnTEvticctqCi044Ab23WXL3amcLzqg3v1g/viewform"
random[1] = "https://docs.google.com/forms/d/e/1FAIpQLSe459plz6zPHweAD_5TwY5CtF29yjCIUWZHw72MHq-R4S5zgg/viewform"

function generator() 
{
    window.location = random[Math.floor(Math.random() * random.length)];
}