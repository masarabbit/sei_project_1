

//! if you can't click page, you need to disable cover


function init() {


  
  
  //*items and wall positions
  const cellsWithWalls = [9,27,48,50,66,68,88,90,106,108,128,130,131,132,133,134,135,136,137,138,139,140,143,144,145,146,148,149,150,151,152,153,168,170,171,181,182,194,204,205,206,207,208,210,211,213,214,215,216,217,218,219,221,222,224,225,234,243,250,251,253,254,255,256,257,258,259,264,265,270,272,274,283,296,297,304,305,307,308,309,310,312,314,323,325,327,333,334,336,337,339,340,342,344,345,347,348,349,350,352,354,363,365,367,373,374,376,377,379,380,382,384,385,390,391,392,394,403,405,407,410,411,413,414,416,417,419,420,422,424,425,427,428,434,441,442,443,445,446,447,450,451,453,454,456,457,459,460,461,462,464,465,467,468,474,475,476,477,478,480,493,494,519,521,522,523,525,526,548,549,551,552,556,557,558,563,565,566,573,574,588,589,591,592,596,603,605,606,610,611,613,614,616,617,618,619,620,621,622,624,625,628,629,631,632,633,634,636,643,645,646,650,651,653,654,656,657,658,659,660,661,662,664,665,668,669,671,672,673,674,676,683,685,686,690,691,699,700,704,705,708,709,711,712,716,723,730,731,732,733,734,735,736,737,739,740,742,743,744,745,748,749,751,752,756,764,765,766,767,770,771,772,773,774,775,776,777,779,780,782,783,784,785,788,789,791,792,796,804,805,806,807,836,843,852,853,854,855,856,857,858,859,860,861,862,864,865,868,869,873,874,875,883,885,886,888,890,892,893,894,895,896,897,898,899,900,901,902,904,905,908,909,913,914,915,923,925,926,928,930,936,937,948,949,956,963,965,966,968,970,971,972,973,974,976,977,979,980,981,982,983,984,985,986,988,989,990,991,993,994,996,1001,1002,1003,1005,1006,1008,1009,1010,1011,1012,1013,1014,1016,1017,1019,1020,1021,1022,1023,1024,1025,1026,1028,1029,1030,1031,1033,1034,1036,1037,1038,1040,1056,1057,1079,1081,1082,1083,1084,1085,1087,1088,1090,1091,1096,1097,1099,1100,1101,1102,1103,1105,1106,1107,1108,1109,1110,1116,1117,1118,1125,1127,1128,1130,1131,1139,1143,1145,1150,1152,1154,1156,1165,1167,1168,1170,1171,1173,1174,1179,1180,1181,1182,1183,1185,1186,1187,1188,1189,1190,1192,1194,1196,1205,1207,1208,1213,1214,1232,1234,1236,1245,1247,1248,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1261,1262,1263,1265,1266,1268,1269,1270,1272,1273,1274,1276,1284,1285,1287,1288,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1301,1302,1303,1305,1306,1308,1310,1312,1314,1316,1323,1345,1346,1348,1350,1352,1354,1356,1363,1367,1368,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1385,1386,1388,1389,1390,1392,1393,1394,1396,1403,1407,1408,1412,1413,1414,1415,1416,1417,1423,1436,1444,1445,1446,1448,1450,1451,1452,1453,1454,1455,1456,1464,1465,1466,1468,1469,1470,1471,1472,1473,1474,1475,1488,1490,1506,1508,1528,1530,1546,1548,1569,1587]


  const cellsWithTeleport = [49,67,481,518,1041,1078,1529,1547]
  const cellsWithTeleportExit = [1489,1507,517,482,1077,1042,89,107]
  const cellsWithBoundary = [366,381,311,929,1193]
  // [271,326,341,889,1153]
  // const cellsWithMarkers = [368,378,613,504,626,851,865,913,1148,1427,1181,1092,1330,1204]
  const cellsWithMarkers = []

  

  //* items

  const itemObjects = [
    {
      itemName: 'normal star',
      score: 100,
      class: 'item',
      image: 'item',
      sound: 'meow.wav',
      additionalEffect: 'nothing',
      // cellsWithItem: [129,147,169]
      cellsWithItem: [129,147,169,172,173,174,175,176,177,178,179,183,184,185,186,187,188,189,190,191,192,193,209,212,220,223,226,228,229,230,232,233,245,246,247,248,249,252,260,261,262,263,266,267,268,269,273,284,285,287,288,289,290,291,292,293,294,295,298,299,300,301,302,303,306,313,324,328,329,330,331,332,335,338,343,346,353,364,368,369,370,371,372,375,378,383,386,387,388,389,393,404,408,409,412,415,418,423,426,429,430,431,432,433,444,448,449,452,455,458,463,466,469,470,471,472,473,483,485,486,487,488,489,490,491,492,495,497,498,499,500,501,502,503,504,505,507,508,509,510,511,512,513,514,515,516,524,527,528,529,530,531,532,533,534,535,536,537,542,543,544,545,546,547,550,553,554,555,564,567,568,569,570,571,572,575,576,577,582,583,584,585,586,587,590,593,594,595,604,607,609,612,615,623,626,627,630,635,644,647,648,649,652,655,663,666,667,670,675,684,687,688,689,692,693,694,696,697,698,702,703,706,707,710,713,714,715,724,725,726,727,728,729,738,741,746,747,750,753,755,768,769,778,781,786,787,790,793,794,795,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,844,845,846,847,848,850,851,863,866,867,870,871,872,884,887,891,903,906,907,910,912,924,927,931,932,933,934,939,940,941,942,943,944,945,946,947,950,951,952,953,954,955,964,967,975,978,987,992,995,1004,1007,1015,1018,1027,1032,1035,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1086,1089,1092,1094,1095,1098,1104,1111,1112,1114,1115,1126,1129,1132,1133,1134,1135,1136,1137,1138,1144,1151,1155,1166,1169,1172,1175,1176,1178,1184,1191,1195,1206,1209,1210,1211,1212,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1235,1246,1249,1260,1264,1267,1271,1275,1286,1289,1300,1304,1307,1311,1315,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1347,1351,1355,1364,1366,1369,1370,1371,1384,1387,1391,1395,1404,1405,1406,1410,1411,1424,1425,1426,1427,1428,1429,1430,1432,1433,1434,1449,1467]
    },
    {
      itemName: 'big star',
      score: 1000,
      class: 'big_star',
      image: 'big_star',
      sound: 'nalalala.wav',
      additionalEffect: 'invincibility',
      // cellsWithItem: [244,227]
      cellsWithItem: [244,227,1093,1365,1435]
    },
    { 
      itemName: 'blue star',
      score: 500,
      class: 'blue_star',
      image: 'blue_star',
      sound: 'mimimimi.wav',
      additionalEffect: 'nothing',
      // cellsWithItem: [179,180]
      cellsWithItem: [180,231,286,484,496,506,608,695,701,754,849,911,935,938,1113,1177,1409,1431]
    }
  ]



  //* page elements
  const grid = document.querySelector('.grid')
  const cover = document.querySelector('.cover')
  const gameEndCover = document.querySelector('.game_end_cover')
  const pauseCover = document.querySelector('.pause_cover')
  const playAgainButton = document.querySelector('#play_again')
  const startButton = document.querySelector('#start')
  const gameStartWrapper = document.querySelector('.game_start_wrapper')
  const gameStartCover = document.querySelector('.game_start_cover')
  const playerAudio = document.querySelector('#player_audio')
  const cpuAudio = document.querySelector('#cpu_audio')
  const soundControl = document.querySelector('.sound_control')

  //* status display
  const scoreDisplay = document.querySelector('.score')
  const scoreDisplayWrapper = document.querySelector('.score_wrapper')
  let score = 0
  let gameStatus = 'play'  //!for pause setting.
  let gameSound = 'on'
  let invincibilityTimer = 0
  let flickerTimer = 0
  const lifeDisplay = document.querySelector('#life')

  

  // * Variables
  const width = 40
  const height = 40
  const cellCount = width * height
  const outerCells = []
  const cells = []
  // const innerCells = []
  const lifeCounters = []
  const defaultMotion = ['right','left','up','down']
  let flickerInterval = null
  const flickerStateDuration = 3
  const invincibilityDuration = 10
  let invincibilityInterval = null
  const knockOutScore = 1000

  let itemTotal = 0
  let knockOutCpuCounter = 1
  // let itemCollected = 0

  function setItemTotal(){
    itemObjects.forEach(item =>{
      itemTotal += item.cellsWithItem.length
    })
  }
  setItemTotal() //! sets item total based on items in itemObjects

  let itemToCollect = itemTotal  //! ensure this is called after setItemTotal
  let blueStarCollected = 0
  
  //* actors
  const player = {
    class: 'player_down',
    name: 'cat blob',
    staticGif: 'down.gif',
    motionGif: 'down.gif',
    knockOutImg: 'cat_knock_out.svg',
    defaultPosition: 580,
    position: 580,
    display: document.createElement('div'),
    prevPosition: null,
    facingDirection: 'down',
    horizontalPosition: null,
    verticalPosition: null,
    defaultLife: 3,
    life: 3,
    knockOutAnimationDisplay: null,
  }

  const cpuObjects = [
    {
      name: 'one',
      class: 'cpuClass',
      staticGif: 'sleep.gif', 
      motionGif: 'one_down.gif',
      knockOutImg: 'dog_knock_out.svg',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 406,
      position: 406,
      display: document.createElement('div'),
      defaultTarget: {
        position: 0,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [150,250,300],
      speed: 200,
      horizontalPosition: null,
      verticalPosition: null,
      motionInterval: null,
      defaultStatus: 'inactive',
      status: 'inactive',  //* determines if cpu is in motion or not 
      knockOutAnimationDisplay: null,
      moodRange: ['scatter','aggressive_A','aggressive_B','aggressive_C','wander_A','wander_B','aggressive_D'],    //* determine chase behaviour
      mood: 'scatter',
      moodTimer: 0,
      recoveryInterval: null,
      recoveryTimer: 0,
    },
    {
      name: 'two',
      class: 'cpuClass',
      staticGif: 'sleep.gif',
      motionGif: 'two_down.gif',
      knockOutImg: 'dog_knock_out.svg',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 351,
      position: 351,
      display: document.createElement('div'),
      defaultTarget: {
        position: 39,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [200,200,300],
      speed: 150,
      horizontalPosition: null,
      verticalPosition: null,
      motionInterval: null,
      defaultStatus: 'inactive',
      status: 'inactive',
      knockOutAnimationDisplay: null,
      moodRange: ['scatter_A','aggessive_A','cunning_A','cunning_B','wander'],
      mood: 'wander',
      moodTimer: 0,
      recoveryInterval: null,
      recoveryTimer: 0,
    },
    {
      name: 'three',
      class: 'cpuClass',
      staticGif: 'sleep.gif',
      motionGif: 'three_down.gif',
      knockOutImg: 'dog_knock_out.svg',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 969,
      position: 969,
      display: document.createElement('div'),
      defaultTarget: {
        position: 1560,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [150,200,300],
      speed: 150,
      horizontalPosition: null,
      verticalPosition: null,
      motionInterval: null,
      defaultStatus: 'inactive',
      status: 'inactive',
      knockOutAnimationDisplay: null,
      moodRange: ['scatterA','scatterB','wanderA','aggressive_A','wander_B','scatterC','aggressive_B'],
      mood: 'wander',
      moodTimer: 0,
      recoveryInterval: null,
      recoveryTimer: 0,
    },
    {
      name: 'four',
      class: 'cpuClass',
      staticGif: 'sleep.gif',
      motionGif: 'four_down.gif',
      knockOutImg: 'dog_knock_out.svg',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 1233,
      position: 1233,
      display: document.createElement('div'),
      defaultTarget: {
        position: 1599,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [80,200,200],
      speed: 150,
      horizontalPosition: null,
      verticalPosition: null,
      motionInterval: null,
      defaultStatus: 'inactive',
      status: 'inactive',
      knockOutAnimationDisplay: null,
      moodRange: ['scatter_A','wander_A','scatter_B','wander_B','aggressive_A','aggressive_B','cunning_A','cunning_B'],
      mood: 'cunning',
      moodTimer: 0,
      recoveryInterval: null,
      recoveryTimer: 0,
    },
    {
      name: 'five',
      class: 'cpuClass',
      staticGif: 'sleep.gif',
      motionGif: 'five_down.gif',
      knockOutImg: 'dog_knock_out.svg',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 421,
      position: 421,
      display: document.createElement('div'),
      defaultTarget: {
        position: 1599,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [50,200,200],
      speed: 100,
      horizontalPosition: null,
      verticalPosition: null,
      motionInterval: null,
      defaultStatus: 'inactive',
      status: 'inactive',
      knockOutAnimationDisplay: null,
      moodRange: ['wander_A','wander_B','wander_C','aggressive_A','aggressive_B','cunning_A','wander_D'],
      mood: 'cunning',
      moodTimer: 0,
      recoveryInterval: null,
      recoveryTimer: 0,
    }
  ]
  
  function setActorPosition(actor){                   // resets horizontal and vertical position of cpu or player
    actor.horizontalPosition = actor.position % width
    actor.verticalPosition = Math.floor(actor.position / width)
  }
  
  //* determine cpu's mood depending on counter
  function moodTimerCount(){
    cpuObjects.forEach(cpu =>{
      if (cpu.status !== 'inactive'){
        cpu.moodTimer += 1
      }
      if (cpu.moodTimer > 5){
        cpu.moodTimer = 0
      }
      if (cpu.moodTimer === 5){
        switchMood(cpu)
        resetCpuSpeed(cpu)
      }
    })
  }
  
  
  function switchMood(cpu){

    if (cpu.moodRange.indexOf(cpu.mood) === cpu.moodRange.length - 1){
      cpu.mood = cpu.moodRange[0]
    } else {
      cpu.mood = cpu.moodRange[cpu.moodRange.indexOf(cpu.mood) + 1]
    }
    
  }

  function resetCpuSpeed(cpu){
    clearInterval(cpu.motionInterval)     
    
    if (player.display.classList.contains('invincible')){
      cpu.speed = 200
    } else {
      switch (cpu.mood.split('_')[0]) {
        case 'scatter': 
          cpu.speed = cpu.speedRange[1]
          break
        case 'aggressive' || 'cunning': 
          cpu.speed = cpu.speedRange[0]
          break
        case 'wander': 
          cpu.speed = cpu.speedRange[2]
          break
        default:
          cpu.speed = 200
      }  
    }

    displayActorImage(cpu)
    cpu.motionInterval = setInterval(
      function(){ 
        if (cpu.status === 'active'){
          cpuMovement(cpu)
        }
      },cpu.speed)
  }



  //* cpu control


  function controlCpuActivation(){
    
    if (itemToCollect > 0){
      setTimeout(()=>{
        if (!cpuObjects[0].display.classList.contains('hidden')){
          changeStatusToActive(cpuObjects[0])
        }
      },1000)
    }

    if (itemToCollect === itemTotal - 20){
      setTimeout(()=>{
        if (!cpuObjects[1].display.classList.contains('hidden')){
          changeStatusToActive(cpuObjects[1])
        }
      },1000)
    }

    if (blueStarCollected > 1){ 
      setTimeout(()=>{
        if (!cpuObjects[2].display.classList.contains('hidden')){
          changeStatusToActive(cpuObjects[2])
        }
      },1000)
    }

    if (cpuObjects[1].status === 'active' || cpuObjects[2].status === 'active'){
      setTimeout(()=>{
        if (!cpuObjects[3].display.classList.contains('hidden')){
          changeStatusToActive(cpuObjects[3])
        }
      },2000)
    }

    if (itemToCollect === itemTotal - 225){
      setTimeout(()=>{
        if (!cpuObjects[4].display.classList.contains('hidden')){
          changeStatusToActive(cpuObjects[4])
        }
      },1000)
    }
  }

  

  //* page display

  const playerPositionDisplay = document.querySelector('#player_position')
  const cpuOnePositionDisplay = document.querySelector('#cpu_one_position')
  const cpuTwoPositionDisplay = document.querySelector('#cpu_two_position')
  const wallPositionDisplay = document.querySelector('#wall_position')
  // const itemPositionDisplay = document.querySelector('#item_position')



  
  // * Make a grid 
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const outerCell = document.createElement('div')
      const cell = document.createElement('div')
      cell.setAttribute('id', i)
      outerCell.classList.add('outer_cell')
      cell.classList.add('cell')
      outerCell.appendChild(cell)
      grid.appendChild(outerCell)
      outerCells.push(outerCell)
      cells.push(cell)
    }
  } 

  //* initialise

  let constantCheck = null
  let constantCheckDespitePause = null
  let moodInterval = null



  function triggerGameStart(){
    if (!gameStartCover.classList.contains('display')){   // prevents start button being pressed again once game is already in play
      return
    }
    playSoundEffect('nalalala.wav',playerAudio)
    countDown()

    setInterval(()=>{   //* readjusts actor display sizes incase player resizes window
      reAdjustActorSize(player)
  
      cpuObjects.forEach(cpu =>{
        reAdjustActorSize(cpu)
      })
    },1000)
  
    createGrid()

    displayPlayerLife()
    populateCells(cellsWithWalls,'wall')
    populateCells(cellsWithTeleport,'teleport')
    populateCells(cellsWithBoundary,'boundary')
    populateCells(cellsWithMarkers,'marker')
    populateItems()

    setTimeout(() =>{
      displayActorImage(player)
      player.display.classList.add('hidden')
      addPlayer(player.position)
    },2000) 
    
    setTimeout(() =>{
      player.display.classList.remove('hidden')
      initialiseCpus(cpuObjects)  
      constantActions()
    },2200)

  }

  function constantActions(){
    
    //* checking for status

    constantCheckDespitePause = setInterval(() =>{
      rePositionAllActorImages() // this is to ensure player image stays in right place 
    },10)
    
    constantCheck = setInterval(() =>{
      if (gameStatus === 'play'){ 
        checkPlayerAndCpuCollision()
        controlCpuActivation()
        triggerTeleport()
      }
    },10)

    moodInterval = setInterval(()=>{
      if (gameStatus === 'play'){
        moodTimerCount()
      }
    },1000)
  }

  function populateItems(){
    itemObjects.forEach( item =>{
      populateCells(item.cellsWithItem,item.class)
    })
    blueStarCollected = 0
  }

  function countDown(){  // count down circle animation when game starts and resets

    

    gameStartWrapper.classList.add('move_down')
      
    gameStartCover.classList.remove('display')
    const countDownCircle = document.createElement('div')
    countDownCircle.classList.add('countdown_circle')

    setTimeout(() =>{
      playSoundEffect('321.wav',playerAudio)
      cover.appendChild(countDownCircle)
      countDownCircle.classList.add('count')
      countDownCircle.innerHTML = '3'
    },800)

    setTimeout(() =>{
      countDownCircle.classList.remove('count')
    },1000)  

    setTimeout(() =>{
      countDownCircle.classList.add('count')
      countDownCircle.innerHTML = '2'
    },1200)  

    setTimeout(() =>{
      countDownCircle.classList.remove('count')
    },1400)  

    setTimeout(() =>{
      countDownCircle.classList.add('count')
      countDownCircle.innerHTML = '1'
    },1600) 
    
    setTimeout(() =>{
      countDownCircle.classList.remove('count')
    },1800)  

    setTimeout(() =>{
      countDownCircle.classList.add('count')
      countDownCircle.classList.add('transparent')
      countDownCircle.innerHTML = 'go!'
    },2000) 
    
    setTimeout(() =>{
      cover.removeChild(countDownCircle)
    },2200)

  }
  

  //! triggering each cpu's motion could be a separate function?
  function initialiseCpus(cpuObjects){
    cpuObjects.forEach(cpu => {
      cpu.position = cpu.defaultPosition 
      cpu.status = cpu.defaultStatus
      cpu.display.className = 'cpuClass' //removes any class aquired in previous play
      clearInterval(cpu.motionInterval) 
      
      displayActorImage(cpu)
      cpu.motionInterval = setInterval(
        function(){ 
          if (cpu.status === 'active' && gameStatus === 'play'){
            cpuMovement(cpu)
          }
        },cpu.speed)
      addCpu(cpu)
    })
  }
  




  function checkPlayerAndCpuCollision(){
    if (!player.display.classList.contains('hidden') && !player.display.classList.contains('flicker')){
      cpuObjects.forEach(cpu => {
        if (player.position === cpu.position && player.display.classList.contains('invincible') && cpu.status !== 'inactive'){
          knockOutCpu(cpu)
        } else if (player.position === cpu.position && !player.display.classList.contains('invincible') && cpu.status !== 'inactive'){
          playerLoseLife()
        }
      })
    }
  } 
  

  //* reset periodically to in case player resize screen
  function rePositionImage(target){
    target.display.style.top = `${cells[target.position].getBoundingClientRect().y}px`
    target.display.style.left = `${cells[target.position].getBoundingClientRect().x}px`
  }

  function rePositionAllActorImages(){
    rePositionImage(player)

    cpuObjects.forEach(cpu =>{
      if (cpu.status === 'inactive' || gameStatus === 'pause') {
        cpu.display.style.top = `${cells[cpu.position].getBoundingClientRect().y}px`
        cpu.display.style.left = `${cells[cpu.position].getBoundingClientRect().x}px`
      }
    })
  }
  


  //* invincibility
  

  function turnPlayerInvincible(){
    player.display.classList.add('invincible')
    clearInterval(invincibilityInterval) //* clears any old interval

    invincibilityInterval = setInterval(
      function(){
        if (gameStatus === 'pause'){
          return
        }
        if (invincibilityTimer < invincibilityDuration){
          invincibilityTimer += 1
          // console.log(`counting invincibility Timer${invincibilityTimer}`)
        } else {
          player.display.classList.remove('invincible')
          player.staticGif = `${player.facingDirection}.gif`  // change back to normal appearance
          player.display.innerHTML = `<img src = "./assets/${player.staticGif}" ></img>` 
          knockOutCpuCounter = 1
          invincibilityTimer = 0
          clearInterval(invincibilityInterval) 
        }
      },1000)

  }


  function knockOutCpu(cpu){
  
    cpu.status = 'inactive'
    displayKnockOutAnimation(cpu) 
    score += knockOutScore * knockOutCpuCounter
    const scoreEarned = knockOutScore * knockOutCpuCounter
    knockOutCpuCounter += 1
    playSoundEffect('oh.wav',cpuAudio)

    setTimeout(() =>{
      cpu.knockOutAnimationDisplay.innerHTML = scoreEarned
    },400)

    setTimeout(() =>{
      cpu.knockOutAnimationDisplay.style.top = `${scoreDisplay.getBoundingClientRect().y}px`
      cpu.knockOutAnimationDisplay.style.left = `${scoreDisplay.getBoundingClientRect().x}px`
    },800)

    setTimeout(() =>{
      cover.removeChild(cpu.knockOutAnimationDisplay)
      animateSparkle(cpu)  //* creates a star that floats back to default position
      playSoundEffect('ahh.wav',cpuAudio)
      scoreDisplay.innerHTML = score
      scoreDisplayWrapper.classList.add('animate')
    },1000)

    setTimeout(() =>{                     // animate score board
      scoreDisplayWrapper.classList.remove('animate')
    },1200)

    setTimeout(() =>{
      // returns cpu to default position, but harmless until hidden class is removed
      removeActor(cpu)
    },5000)

    setTimeout(() =>{
      cpu.position = cpu.defaultPosition

      addCpu(cpu)
      displayActorImage(cpu) //syncs actor image with actual position
      cpu.display.classList.remove('hidden')
      cpu.display.classList.add('fadein')
    },7000)

    cpu.recoveryInterval = setInterval(
      function(){
        if (gameEndCover.classList.contains('shade')){
          clearInterval(cpu.recoveryInterval) 
        }
        if (gameStatus === 'pause'){
          return
        }
        if (cpu.recoveryTimer < 10){
          cpu.recoveryTimer += 1
          // console.log(`${cpu.name}recovery:${cpu.recoveryTimer}`)
        } else {
          cpu.display.classList.remove('fadein')
          changeStatusToActive(cpu)
          cpu.recoveryTimer = 0
          clearInterval(cpu.recoveryInterval) 
        }
      },1000)


  }



  function changeStatusToActive(cpu){
    if (itemToCollect > 0 && !cpu.display.classList.contains('fadein')){  //* this added to ensure cpus do not recover when game is already complete, and also prevents controlCpu's activate actions.
      cpu.status = 'active'
    }
  }


  
  function animateSparkle(cpu){  //this is the sparkle that appears when cpu is defeated
    cpu.knockOutAnimationDisplay = document.createElement('div')
    cpu.knockOutAnimationDisplay.classList.add('effect_animation_slow')
    cpu.knockOutAnimationDisplay.innerHTML = '<img src = "./assets/sparkle.gif" ></img>'      

    const cpuCurrentPosition = cells[cpu.position].getBoundingClientRect()
    cpu.knockOutAnimationDisplay.style.top = `${cpuCurrentPosition.y}px`        
    cpu.knockOutAnimationDisplay.style.left = `${cpuCurrentPosition.x}px`
    cpu.knockOutAnimationDisplay.style.height = `${cpuCurrentPosition.height}px`
    cpu.knockOutAnimationDisplay.style.width = `${cpuCurrentPosition.width}px`

    cover.appendChild(cpu.knockOutAnimationDisplay)
    
    setTimeout(function(){
      cpu.knockOutAnimationDisplay.style.top = `${outerCells[cpu.defaultPosition].getBoundingClientRect().y}px`
      cpu.knockOutAnimationDisplay.style.left = `${outerCells[cpu.defaultPosition].getBoundingClientRect().x}px`
    },100)
    
    setTimeout(function(){
      cover.removeChild(cpu.knockOutAnimationDisplay)
      cpu.knockOutAnimationDisplay = null
    },8000)
  }  
  

  //* play sound

  
  
  function toggleMute(){
    if (gameSound === 'on') {
      gameSound = 'off'
      soundControl.innerHTML = 'sound: OFF'
    } else {
      gameSound = 'on'
      soundControl.innerHTML = 'sound: ON'
    }
    soundControl.classList.toggle('off')
  }


  function playSoundEffect(sound,audio){
    if (gameSound === 'on'){
      audio.src = `./assets/${sound}`
      audio.play()
    }
  }
    





  function playerLoseLife(){
    
    
    playSoundEffect('meow_knockOut.wav',playerAudio)
    displayKnockOutAnimation(player)
    
    if (player.life > 0){
      bringBackPlayerToPlay()
    } else {
      gameOverEvent()
    }  
  }
  
  function displayKnockOutAnimation(actor){
    actor.display.classList.add('hidden')     // stops actor and prevents further playerLoseLife

    if (actor.knockOutAnimationDisplay !== null){
      cover.removeChild(actor.knockOutAnimationDisplay)
      actor.knockOutAnimationDisplay = null
    }
  

    actor.knockOutAnimationDisplay = document.createElement('div')  // displays hurt animation
    actor.knockOutAnimationDisplay.classList.add('effect_animation_fast')
    actor.knockOutAnimationDisplay.innerHTML = `<img src = "./assets/${actor.knockOutImg}" ></img>`
    const actorCurrentPosition = cells[actor.position].getBoundingClientRect()

    actor.knockOutAnimationDisplay.style.top = `${actorCurrentPosition.y - ((knockOutCpuCounter - 1) * 10)}px`   
    actor.knockOutAnimationDisplay.style.left = `${actorCurrentPosition.x}px`     

    actor.knockOutAnimationDisplay.style.height = `${cells[0].getBoundingClientRect().height}px`
    actor.knockOutAnimationDisplay.style.width = `${cells[0].getBoundingClientRect().width}px` 
    cover.appendChild(actor.knockOutAnimationDisplay)

    actor.knockOutAnimationDisplay.classList.add('enlarge')
  }
  
  function reAdjustActorSize(actor){
    const cellSize = cells[0].getBoundingClientRect()
    actor.display.style.height = `${cellSize.height}px`
    actor.display.style.width = `${cellSize.width}px`
  }



  function bringBackPlayerToPlay(){

    setTimeout(function(){
      player.knockOutAnimationDisplay.style.top = `${cells[(player.position) % 40].getBoundingClientRect().y}px` // reposition hurt animation to top of screen (same row where playerLoseLife triggered)
    },800)
    
    setTimeout(function(){
      cover.removeChild(player.knockOutAnimationDisplay) //* fixed to ensure the knockOutAnimation is removed
      player.knockOutAnimationDisplay = null

      const lifeDisplayAnimation = document.createElement('div')
      lifeDisplayAnimation.classList.add('effect_animation_medium')
      lifeDisplayAnimation.innerHTML = '<img src = "./assets/down.gif" ></img>'      
      const lifeCounterPosition = lifeCounters[lifeCounters.length - 1].getBoundingClientRect()
      const currentPlayerCell = cells[player.position].getBoundingClientRect()
      lifeDisplayAnimation.style.top = `${lifeCounterPosition.y}px`
      lifeDisplayAnimation.style.left = `${lifeCounterPosition.x}px`
      lifeDisplayAnimation.style.height = `${currentPlayerCell.height}px`
      lifeDisplayAnimation.style.width = `${currentPlayerCell.width}px`
      cover.appendChild(lifeDisplayAnimation)
      
      setTimeout(function(){
        lifeDisplay.removeChild(lifeCounters[lifeCounters.length - 1])
      },100)

      setTimeout(function(){  // move player life image to where the player was
        lifeDisplayAnimation.style.top = `${currentPlayerCell.y}px`
        lifeDisplayAnimation.style.left = `${currentPlayerCell.x}px`
      },200)

      setTimeout(function(){  
        cover.removeChild(lifeDisplayAnimation)
        player.life -= 1
        displayPlayerLife()
        displayActorImage(player)
        player.display.classList.remove('hidden') 
        player.display.classList.add('flicker')    // make player flicker state for a duration

        flickerInterval = setInterval(
          function(){
            if (gameStatus === 'pause'){
              return
            }
            if (flickerTimer < flickerStateDuration){
              flickerTimer += 1
              // console.log(`counting flicker Timer${flickerTimer}`)
            } else {
              flickerTimer = 0
              player.display.classList.remove('flicker')    
              clearInterval(flickerInterval) 
            }
          },1000)

      },1000)

    },1000)
  }
  
  function gameOverEvent(){
    playSoundEffect('nooo.wav',playerAudio)
    gameStatus = 'play'
    pauseCover.classList.remove('pause')
    // console.log('game over!')
    const gameOverText = document.querySelector('.game_end_text')
    playAgainButton.classList.add('display')
    gameOverText.innerHTML = 'game over!!'
    gameOverText.classList.add('display')
    gameEndCover.classList.add('shade')
  
  }




  

  //* reset

  function resetStaticGifAndDisplayActors(){
    player.staticGif = 'down.gif'
    displayActorImage(player)
    cpuObjects.forEach(cpu=>{
      cpu.staticGif = 'sleep.gif'
      displayActorImage(cpu)
    })
  }

  
  //* reset all timers, including cpu 
  function resetGame(){
    if ( itemToCollect > 0) {  // prevents unwanted resets when reset button is accidentally pressed by space bar
      return
    }
    playSoundEffect('nalalala.wav',playerAudio)
    
    cover.innerHTML = ''  // wipe cover to remove actor images
    playAgainButton.classList.remove('display')
    gameEndCover.classList.remove('shade') // hide game over message
    score = 0
    clearInterval(moodInterval)
    clearInterval(constantCheck)
    clearInterval(constantCheckDespitePause)
   

    clearInterval(invincibilityInterval)     //*remove various class attached in prior play
    clearInterval(flickerInterval)
    invincibilityTimer = 0
    flickerTimer = 0
    player.display.className = player.class


    itemToCollect = itemTotal
    scoreDisplay.innerHTML = score
    player.life = player.defaultLife   // reset player life total
    displayPlayerLife()

    populateItems()
    
    countDown()

    setTimeout(() =>{

      //! control how enemies start to move?
      cpuObjects.forEach(cpu =>{  // remove old position before reinitialising
        removeActor(cpu)
        cpu.moodTimer = 0
        clearInterval(cpu.recoveryInterval)
        cpu.recoveryTimer = 0
      })
      initialiseCpus(cpuObjects) 

      removeActor(player)
      player.position = player.defaultPosition
      addPlayer(player.position)

      resetStaticGifAndDisplayActors()
      player.display.classList.remove('hidden')

      constantActions()

    },2200)

  }

  


  
  // * Make walls
  // walls defined by adding class to cells, according to what is mentioned in the array

  function populateCells(array,classToAdd){
    for (let i = 0; i < array.length ; i++) {
      outerCells[array[i]].classList.add(classToAdd)
    }
  }

  

  function displayPlayerLife(){
    lifeDisplay.innerHTML = ''
    for (let i = 0; i < player.life; i++ ){
      const lifeCounter = document.createElement('div')
      lifeCounter.classList.add('life_counter')
      lifeCounter.innerHTML = '<img src = "./assets/down.gif" ></img>'
      lifeDisplay.appendChild(lifeCounter)
      lifeCounters.push(lifeCounter)
    }
  }




  //* Animation displaying image on page based on movement in the grid


  function displayActorImage(actor){
    actor.display.classList.add('effect_animation_fast')
    if (actor !== player) {  //* syncing actor's speed with it's speed (only for cpu)
      actor.display.style.transition = `${actor.speed / 1000}s`
    }
    if (actor !== player && actor.speed >= 300) { //* ensure transition is atleast 0.3 however slow 
      actor.display.style.transition = '0.3s' 
    }

    actor.display.innerHTML = `<img src = "./assets/${actor.staticGif}" ></img>`

    const currentActor = cells[actor.position].getBoundingClientRect()
    actor.display.style.top = `${currentActor.y}px`
    actor.display.style.left = `${currentActor.x}px`
    actor.display.style.height = `${cells[0].getBoundingClientRect().height}px`
    actor.display.style.width = `${cells[0].getBoundingClientRect().width}px`
  
    cover.appendChild(actor.display)    
  }


  function changeActorImageAndMoveToNewPosition(actor){

    if (actor === player && (actor.facingDirection === 'left' || actor.facingDirection === 'right')) {
      actor.display.innerHTML = `<img src = "./assets/${actor.motionGif}" ></img>`
    } else {
      actor.display.innerHTML = `<img src = "./assets/${actor.staticGif}" ></img>`
    }

  
    actor.display.style.top = `${cells[actor.position].getBoundingClientRect().y}px`
    actor.display.style.left = `${cells[actor.position].getBoundingClientRect().x}px`
    
    setTimeout(function(){
      actor.display.innerHTML = `<img src = "./assets/${actor.staticGif}" ></img>`
    },500)
  }


  function addCpu(cpu) {  // * Add cpu to grid
    cells[cpu.position].classList.add(cpu.class)
    setActorPosition(cpu)
  }


  function removeActor(actor) {
    cells[actor.position].classList.remove(actor.class)
  }


  

  function cpuDetermineTarget(cpu){
    
    setActorPosition(cpu.defaultTarget)
    cpu.target = [cpu.defaultTarget.horizontalPosition,cpu.defaultTarget.verticalPosition]

    if (cpu.mood.split('_')[0] === 'scatter'){  
      cpu.target = [cpu.defaultTarget.horizontalPosition,cpu.defaultTarget.verticalPosition]
      // console.log(`${cpu.name} mode scatter`)
    }
    
    if (cpu.mood.split('_')[0] === 'aggressive'){
      cpu.target = [player.horizontalPosition,player.verticalPosition]
    }

    if (cpu.mood.split('_')[0] === 'cunning'){  
      switch (player.facingDirection) {
        case 'left': 
          cpu.defaultTarget = player.position - 4
          break
        case 'right': 
          cpu.defaultTarget = player.position + 4
          break  
        case 'up': 
          cpu.defaultTarget = player.position - (width * 4)
          break  
        case 'down': 
          cpu.defaultTarget = player.position + (width * 4)
          break   
        default: 
          cpu.defaultTarget = player.position
      }
      setActorPosition(cpu.defaultTarget)
      cpu.target = [cpu.defaultTarget.horizontalPosition,cpu.defaultTarget.verticalPosition]

    } 
  }
  

  //! computer get's error when it hits edge of level
  //! more specific thant isElementInFacingDirection
  function isElementOnRightOf(actor,ele){
    return outerCells[(actor.position + 1)].classList.contains(ele)
  }

  function isElementOnLeftOf(actor,ele){
    return outerCells[(actor.position - 1)].classList.contains(ele)
  }
  
  function isElementAbove(actor,ele){
    return outerCells[(actor.position - width)].classList.contains(ele)
  }

  function isElementBelow(actor,ele){
    return outerCells[(actor.position + width)].classList.contains(ele)
  }

  function isElementInFacingDirection(actor,ele){
    switch (actor.facingDirection){
      case 'right':
        return outerCells[(actor.position + 1)].classList.contains(ele) || cells[(actor.position + 1)].classList.contains(ele)
      case 'left': 
        return outerCells[(actor.position - 1)].classList.contains(ele) || cells[(actor.position - 1)].classList.contains(ele)
      case 'up': 
        return outerCells[(actor.position - width)].classList.contains(ele) || cells[(actor.position - width)].classList.contains(ele)
      case 'down':   
        return outerCells[(actor.position + width)].classList.contains(ele) || cells[(actor.position + width)].classList.contains(ele)
      default:
        console.log('invalid command')
    }
  }


  //* cpu movement

  function cpuMovementDecision(cpu){

    cpuDetermineTarget(cpu)
    
  

    if (cpu.facingDirection === 'right' && !isElementInFacingDirection(cpu,'wall')){
      cpu.motion = ['right']
    }
    if (cpu.facingDirection === 'left' && !isElementInFacingDirection(cpu,'wall')){ 
      cpu.motion = ['left']
    }
    if (cpu.facingDirection === 'down' && !isElementInFacingDirection(cpu,'wall')){
      cpu.motion = ['down']
    }
    if (cpu.facingDirection === 'up' && !isElementInFacingDirection(cpu,'wall')){
      cpu.motion = ['up']
    }

    if (cpu.facingDirection === 'down' && isElementInFacingDirection(cpu,'boundary')){  // when facing down and boundary is below
      cpu.motion = ['left','right']
    }
    
    // //!  markers added for experiment, take out later  
    // if (cpu.facingDirection === 'left' && isElementInFacingDirection(cpu,'marker')){ 
    //   cpu.motion = ['right','up','down']
    // }

    // if (cpu.facingDirection === 'right' && isElementInFacingDirection(cpu,'marker')){ 
    //   cpu.motion = ['left','up','down']
    // }

    // if (cpu.facingDirection === 'down' && isElementInFacingDirection(cpu,'marker')){ 
    //   cpu.motion = ['right','left','up']
    // }
    
    //* when facing right or left and wall is on facing direction
    if ((cpu.facingDirection === 'right' && isElementInFacingDirection(cpu,'wall')) || (cpu.facingDirection === 'left' && isElementInFacingDirection(cpu,'wall'))){
      cpu.motion = ['up','down']
    }

    //* when facing down or up and wall is on facing direction
    if ((cpu.facingDirection === 'down' && isElementInFacingDirection(cpu,'wall')) || (cpu.facingDirection === 'up' && isElementInFacingDirection(cpu,'wall'))){
      cpu.motion = ['left','right']
    }
    
    //! below possibly not necessary, but maybe useful when running away from player?
    if (isElementAbove(cpu,'wall') && isElementOnRightOf(cpu,'wall')){  // when wall at top and right
      cpu.motion = ['down','left']
    } 
    if (isElementAbove(cpu,'wall') && isElementOnLeftOf(cpu,'wall')){  // when wall at top and left
      cpu.motion = ['right','down']
    }
    if (isElementBelow(cpu,'wall') && isElementOnRightOf(cpu,'wall')){  // when wall at bottom and right
      cpu.motion = ['up','left']
    }
    if (isElementBelow(cpu,'wall') && isElementOnLeftOf(cpu,'wall')){   // when wall at bottom and left
      cpu.motion = ['up','right']
    }
    
    if (player.display.classList.contains('invincible')){ //* run away from player
      avoidTarget(cpu)
      resetCpuSpeed(cpu)
      return
    }
    

    if (cpu.mood.split('_')[0] !== 'wander'){
      chaseTarget(cpu)  
    }
      
      
    
  }


  function chaseTarget(cpu){
    if (cpu.horizontalPosition < cpu.target[0]){  //* movement based on target position
      cpu.motion.push('right')
      cpu.motion.push('right')
    } else {
      cpu.motion.push('left')
      cpu.motion.push('left')
    }

    if (cpu.verticalPosition < cpu.target[1]){
      cpu.motion.push('down')
      cpu.motion.push('down')
    } else {
      cpu.motion.push('up')
      cpu.motion.push('up')
    }
    // console.log(cpu.name)
    // console.log(cpu.motion)
  }


  function avoidTarget(cpu){

    //* preventing cpu from taking steps that take them to the player
    //* also checks if the player is around the corner
    if (cpu.position + 1 === player.position || cpu.position + 2 === player.position || cpu.position + 3 === player.position || (cpu.position + 1) - width === player.position || (cpu.position + 1) + width === player.position){
      cpu.filteredMotion = cpu.motion.filter(option => {
        return option !== 'right'
      })
      cpu.motion = cpu.filteredMotion
    }

    if (cpu.position - 1 === player.position || cpu.position - 2 === player.position || cpu.position - 3 === player.position || (cpu.position - 1) - width === player.position || (cpu.position - 1) + width === player.position){
      cpu.filteredMotion = cpu.motion.filter(option => {
        return option !== 'left'
      })
      cpu.motion = cpu.filteredMotion
    }

    if (cpu.position - width === player.position || cpu.position - (width * 2) === player.position || cpu.position - (width * 3) === player.position || (cpu.position - width) - 1 === player.position || (cpu.position - width) + 1 === player.position ){
      cpu.filteredMotion = cpu.motion.filter(option => {
        return option !== 'up'
      })
      cpu.motion = cpu.filteredMotion
    }

    if (cpu.position + width === player.position || cpu.position + (width * 2) === player.position || cpu.position + (width * 3 ) === player.position || (cpu.position + width) - 1 === player.position || (cpu.position + width) + 1 === player.position){
      cpu.filteredMotion = cpu.motion.filter(option => {
        return option !== 'down'
      })
      cpu.motion = cpu.filteredMotion
    }


    //* motion added to go in the opposite direction of player
    if (cpu.horizontalPosition > player.horizontalPosition){  //* movement based on target position
      cpu.motion.push('right')
    } else {
      cpu.motion.push('left')
    }

    if (cpu.verticalPosition > player.verticalPosition){
      cpu.motion.push('down')
    } else {
      cpu.motion.push('up')
    }
    
  }


  

  function turnCpu(cpu,cpuFacingDirection){
    cpu.class = `cpu_${cpuFacingDirection}`
    if (!player.display.classList.contains('invincible')){
      cpu.staticGif = `${cpu.name}_${cpuFacingDirection}.gif`
      // cpu.motionGif = `${cpu.name}_${cpuFacingDirection}.gif`
  
    } else {
      cpu.staticGif = `flee_${cpuFacingDirection}.gif`
      // cpu.motionGif = `flee_${cpuFacingDirection}.gif`
    
    }
  }


  

  //! this might be called from object or array if CPUs shared similar function
  //! this may potentially be renamed cpuOneMovement... 

  //* Move cpu
  function cpuMovement(cpu) {

    if (cpu.status === 'inactive' || gameStatus === 'pause'){
      return
    }

    // removeCpu(cpu.position,cpu.class) 
    removeActor(cpu)
    cpuMovementDecision(cpu)
    const motionIndex =  Math.floor(Math.random() * cpu.motion.length)
    cpu.facingDirection = cpu.motion[motionIndex]
    turnCpu(cpu,cpu.motion[motionIndex])
    
    switch (cpu.motion[motionIndex]) {
      case 'right':
        if (cpu.horizontalPosition < width - 1 && !isElementOnRightOf(cpu,'wall')) cpu.position++ 
        break
      case 'left': 
        if (cpu.horizontalPosition > 0 && !isElementOnLeftOf(cpu,'wall')) cpu.position--
        break
      case 'up': 
        if (cpu.verticalPosition > 0 && !isElementAbove(cpu,'wall')) cpu.position -= width
        break
      case 'down':
        if (cpu.verticalPosition < height - 1 && !isElementBelow(cpu,'wall') && !isElementBelow(cpu,'boundary')) cpu.position += width
        break
      default:
        console.log('cpu invalid command')
    }
  
    addCpu(cpu)
    changeActorImageAndMoveToNewPosition(cpu)

    // // //TODO backend
    // printPosition()
  }
  
 
  //* player related motions

  function addPlayer(position) {
    cells[position].classList.add(player.class)
    setActorPosition(player)
  }

  


  function takeItemAndEarnScore(itemObject){
    if (player.display.classList.contains('flicker')){ // prevents player taking item when in flicker state
      return
    }
    
    if (outerCells[player.position].classList.contains(itemObject.class)){
      outerCells[player.position].classList.remove(itemObject.class)
      
      playSoundEffect(itemObject.sound,playerAudio)
      
      //animate items when taken
      const currentPlayerPosition = outerCells[player.position].getBoundingClientRect()
      
      const itemTaken = document.createElement('div')
      itemTaken.classList.add('effect_animation')
      itemTaken.innerHTML = `<img src = "./assets/${itemObject.image}.gif" ></img>`
      itemTaken.style.top = `${currentPlayerPosition.y}px`
      itemTaken.style.left = `${currentPlayerPosition.x}px`
      itemTaken.style.height = `${currentPlayerPosition.height}px`
      itemTaken.style.width = `${currentPlayerPosition.width}px`
      cover.appendChild(itemTaken)
      
      setTimeout(function(){
        itemTaken.style.top = `${scoreDisplay.getBoundingClientRect().y}px`
        itemTaken.style.left = `${scoreDisplay.getBoundingClientRect().x}px`
        itemToCollect -= 1  //* moved this to make game judge faster?
      },100)

      setTimeout(function(){
        cover.removeChild(itemTaken)
        score += itemObject.score
        scoreDisplay.innerHTML = score
        scoreDisplayWrapper.classList.toggle('animate')
        if (itemToCollect < 1){
          gameCompletionEvent()
          return
        }
      },1000)

      setTimeout(function(){ // animate score board
        scoreDisplayWrapper.classList.toggle('animate')
      },1200)

    }
  }

  function gameCompletionEvent(){  
    gameStatus = 'play'
    pauseCover.classList.remove('pause')
    playSoundEffect('talalala.wav',playerAudio)

    cpuObjects.forEach(cpu => {
      // cpu.display.classList.add('hidden')
      cpu.status = 'inactive'
    })
    const gameCompletionText = document.querySelector('.game_end_text')
    playAgainButton.classList.add('display')
    gameCompletionText.innerHTML = 'complete!!'
    gameCompletionText.classList.add('display')
    gameEndCover.classList.add('shade')

  }
  

  //* teleport

  function teleport(actor){
    //! possibly make the time taken for ghost to return slower, but maybe later.

    actor.display.classList.add('hidden')
    actor.position = cellsWithTeleportExit[cellsWithTeleport.indexOf(actor.position)]
    if (actor === player){
      addPlayer(actor.position)
    } else {
      addCpu(actor)
    }

    setTimeout(function(){
      displayActorImage(actor)
    },10)

    setTimeout(function(){
      actor.display.classList.remove('hidden')
      actor.display.classList.add('fadeinfast')
    },300)

    setTimeout(function(){
      actor.display.classList.remove('fadeinfast')
    },1500)
  }

  function triggerTeleport(){
    if (outerCells[player.position].classList.contains('teleport')){
      teleport(player)
    }
    
    cpuObjects.forEach(cpu => {
      if (outerCells[cpu.position].classList.contains('teleport')){
        teleport(cpu)
      }
    })
  }



  // * Move Player
  function handleMovementWithKey(e) {

    if (player.display.classList.contains('hidden') || gameStartCover.classList.contains('display') || e.key === ' ' || gameStatus === 'pause') {
      return
    }

    removeActor(player)
    turnPlayer(e.key)


    switch (e.key) {
      case 'ArrowRight': 
        if (player.horizontalPosition < width - 1 && !isElementInFacingDirection(player,'wall')) player.position++
        break
      case 'ArrowLeft': 
        if (player.horizontalPosition > 0 && !isElementInFacingDirection(player,'wall')) player.position--
        break
      case 'ArrowUp': 
        if (player.verticalPosition > 0 && !isElementInFacingDirection(player,'wall')) player.position -= width
        break
      case 'ArrowDown': 
        if (player.verticalPosition < height - 1 && !isElementInFacingDirection(player,'wall') && !isElementInFacingDirection(player,'boundary')) player.position += width
        break
      default:
        console.log('invalid command')
    }

    if (outerCells[player.position].classList.contains('big_star') && !player.display.classList.contains('flicker')){
      turnPlayerInvincible()
    }

    if (outerCells[player.position].classList.contains('blue_star') && !player.display.classList.contains('flicker')){
      blueStarCollected += 1  //* count blue star collected
    }

    itemObjects.forEach(itemObject =>{
      takeItemAndEarnScore(itemObject) 
    })
    
    changeActorImageAndMoveToNewPosition(player)

    setTimeout(
      function(){
        addPlayer(player.position)
        printPosition()
      },110)
  }
  
  function pauseGame(){
    if (itemToCollect > 0 || !gameEndCover.classList.contains('shade')){

      if (gameStatus === 'play') {
        pauseCover.classList.add('pause')
        gameStatus = 'pause'
      } else {
        pauseCover.classList.remove('pause')
        gameStatus = 'play'
      }
      
    } 
    // console.log(gameStatus)
  }

  function turnPlayer(keyPressed){
    //! prevents player image disappearing when wrong key is pressed.
    if (keyPressed !== 'ArrowLeft' && keyPressed !== 'ArrowRight' && keyPressed !== 'ArrowUp' && keyPressed !== 'ArrowDown'){
      return
    }
    const directionString = keyPressed.replace('Arrow','').toLowerCase()
    player.facingDirection = directionString
    player.class = `player_${directionString}`

    if (!player.display.classList.contains('invincible')){ 
      player.staticGif = `${directionString}.gif`
      if (directionString === 'left' || directionString === 'right'){
        player.motionGif = `${directionString}_shift.gif`
      }

    } else {

      player.staticGif = `invi_${directionString}.gif`
      
      if (directionString === 'left' || directionString === 'right'){
        player.motionGif = `invi_${directionString}_shift.gif`
      }
    }
  }

  //* events
  document.addEventListener('keyup', handleMovementWithKey)

  document.addEventListener('keyup', function(e){
    if (e.key === ' '){
      pauseGame()
    }
  })

  startButton.addEventListener('click', triggerGameStart)
  playAgainButton.addEventListener('click',resetGame)
  soundControl.addEventListener('click', toggleMute)



  //* only used during development
  function printPosition(){
    playerPositionDisplay.innerHTML = `${player.position} Horizontal:${player.horizontalPosition} Vertical:${player.verticalPosition} item left:${itemToCollect} blueStar collected:${blueStarCollected}`
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`

    cpuOnePositionDisplay.innerHTML = `cpuOne status:${cpuObjects[0].status} / cpuOne mood:${cpuObjects[0].mood.split('_')[0]} / cpuOne moodTimer:${cpuObjects[0].moodTimer} / cpuOne target:${cpuObjects[0].target} cpuOne speed:${cpuObjects[0].speed}  cpuMotion:${cpuObjects[0].motion}`

    cpuTwoPositionDisplay.innerHTML = `cpuTwo status:${cpuObjects[1].status} / cpuTwo mood:${cpuObjects[1].mood} / cpuTwo moodTimer:${cpuObjects[1].moodTimer} / cpuTwo target:${cpuObjects[1].target} cpuTwo speed:${cpuObjects[1].speed}`
  }
 


}

window.addEventListener('DOMContentLoaded', init)


//! redundant code

// function playSoundEffect(sound){
//   if (gameSound === 'on'){
//     playerAudio.src = `./assets${sound}`
//     playerAudio.play()
//   }
// }

// function playCpuSoundEffect(sound){
//   if (gameSound === 'on'){
//     cpuAudio.src = `./assets${sound}`
//     cpuAudio.play()
//   }
// }
