(function () {
    // load correct img 
    let img = document.querySelector('.figure-img')
    let windowWidth = window.innerWidth
    windowWidth >= 992 ? img.src = './images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg' :
    windowWidth >= 768 ? img.src = './images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg' :
    img.src = './images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg'

    // btn tooltip
    $('[data-toggle="tooltip"]').tooltip()
})()

// We can use IEFE, or just load image on window resize (below).
// I prefear IEFE because it's simplier and triggers ones, but it doesn't work on screen rotate on mobile devices.

/* function loadImgOnWindowResize() {
    let img = document.querySelector('.figure-img')
    let windowWidth = window.innerWidth
    windowWidth >= 992 ? img.src = './images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg' :
    windowWidth >= 768 ? img.src = './images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg' :
    img.src = './images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg' 
}

window.onresize = loadImgOnWindowResize;

loadImgOnWindowResize() */