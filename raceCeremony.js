function racePodium(blocks) {
    let first=Math.ceil(blocks/3+1);
    let second = first-1;
    let third = blocks - first - second;
    if (third<1) {second--;third++}
    return [second,first,third];
  }