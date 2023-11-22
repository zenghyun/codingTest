function solution(keyinput, board) {
  let maxAreaX = board[0] > 2 ? Math.floor((board[0] - 1) / 2) : 1;
  let maxAreaY = board[1] > 2 ? Math.floor((board[1] - 1) / 2) : 1;
  let area = [0, 0];
  for (let v of keyinput) {
    switch (v) {
      case "left":
        area[0]--;
        break;
      case "right":
        area[0]++;
        break;
      case "up":
        area[1]++;
        break;
      case "down":
        area[1]--;
        break;
    }
    if (Math.abs(area[0]) > maxAreaX) {
      v === "left" ? area[0]++ : area[0]--;
    }
    if (Math.abs(area[1]) > maxAreaY) {
      v === "up" ? area[1]-- : area[1]++;
    }
  }
  return area;
}