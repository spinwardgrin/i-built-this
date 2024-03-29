<template>
  <div class="long-division">
    <svg width="200" height="200">
      <line
        x1="50"
        y1="50"
        x2="150"
        y2="50"
        style="stroke: black; stroke-width: 2"
      />
      <text x="30" y="50" font-family="Verdana" font-size="35" fill="white">
        3
      </text>
      <text x="70" y="50" font-family="Verdana" font-size="35" fill="white">
        15
      </text>
      <text x="70" y="100" font-family="Verdana" font-size="35" fill="white">
        5
      </text>
      <text x="70" y="150" font-family="Verdana" font-size="35" fill="white">
        0
      </text>
    </svg>
  </div>
</template>

<style>
.long-division {
  font-family: monospace;
  text-align: center;
  position: relative;
  color: white;
}

.divisor {
  position: absolute;
  left: -20px;
  top: 20px;
}

.dividend {
  display: inline-block;
  margin-top: 20px;
}

.bar {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  border-left: 1px solid black;
}

.quotient {
  display: inline-block;
  margin-top: -20px;
}

.line {
  height: 1px;
  background: black;
  margin: 10px 0;
}

.remainder {
  display: inline-block;
}
</style>
