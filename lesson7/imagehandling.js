//get all images with data source attribute
let imagesToLoad= document.querySelectorAll("img[data-src]");
//optional parameters being set for the IntersectionalObserver
 const imgOptions={
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
const loadImages=(image)=>{
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload=()=>{
        image.removeAttribute("data-src");
    };
};
//first check to see if the Intersection Observer is supported
if("IntersectionObserver" in window){
    const observer= new IntersectionObserver((items, observer)=>{
        items.forEach((item)=>{
            if(item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    //loop through each img on check status and load if necessary
    imagesToLoad.forEach((img)=>{
        observer.observe(img);
    });
} 
//just load all images if not supported
else{
    imagesToLoad.forEach((img)=>{
        loadImages(img);
    });
}