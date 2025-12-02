// Write code below 💖
const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789,5254];
const prueba =[2,3,3,7,10,11]


function mean(viewsArray){
    let totalViews = 0;
    for(let i = 0; i<viewsArray.length;i++){
        totalViews = totalViews + viewsArray[i]
    }
      return  Math.floor(totalViews / viewsArray.length)
}

function median(viewsArray){

    let p,o,t

    viewsArray.sort(function(a,b){
        return a- b;
    })
    //
        p = Math.floor(viewsArray.length/2);
    if(viewsArray.length%2==0){
         o = viewsArray[p];
         t = viewsArray[p-1];
        return Math.floor(((o+t)/2));
}
    else{
        return viewsArray[p]
    }

}

console.log("Tiktok")
console.log(`Mean: ${mean(recentTikTokViews)}`)
console.log(`Median: ${median(recentTikTokViews)}`)
console.log()
console.log("instagram")
console.log(`Mean: ${mean(recentInstagramViews)}`)
console.log(`Median: ${median(recentInstagramViews)}`)
console.log()
console.log("youtube")
console.log(`Mean: ${mean(recentYouTubeViews)}`)
console.log(`Median: ${median(recentYouTubeViews)}`)

console.log(`prueba Median: ${median(prueba)}`)