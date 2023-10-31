function solution(wallpaper) {
    var left = [];
    var top = [];
    var right = [];
    var bottom = [];

    wallpaper.forEach((v,idx) => {
      [...v].forEach((file, index) => {
        if(file === "#") {
          left.push(idx);
          top.push(index);
          right.push(idx+1);
          bottom.push(index+1);
        }
      } )
    })
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)];
  }
  

  