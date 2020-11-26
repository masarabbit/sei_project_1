

//! if you can't click, you need to disable cover
//TODO add alt to images

//! issue of points getting blurry? reason unknown.

function init() {


  
  
  //*items and wall positions
  // const cellsWithWalls = [27,66,68,106,108,126,127,128,129,130,131,132,133,134,135,138,139,140,141,142,143,144,145,146,148,149,150,151,152,153,154,155,165,175,178,196,205,207,208,210,211,212,213,215,218,220,221,222,223,224,225,226,228,229,230,231,232,233,234,236,245,247,248,250,253,255,258,260,266,268,274,276,285,287,288,290,293,295,298,300,306,308,314,316,324,325,327,328,330,331,332,333,335,336,337,338,340,341,342,343,344,345,346,348,349,350,351,352,354,356,363,392,394,396,403,405,406,407,408,409,410,411,413,414,416,417,418,419,420,421,422,424,425,428,429,430,432,433,434,436,443,445,451,453,454,456,457,458,459,460,461,462,464,465,468,470,476,483,485,491,493,494,499,500,508,510,512,513,514,515,516,523,525,526,527,528,529,530,531,533,534,536,537,539,540,542,543,544,546,547,548,550,552,553,554,555,556,563,570,571,573,574,576,577,579,580,582,583,584,586,587,588,590,596,604,605,606,607,608,610,611,628,630,631,632,633,634,636,648,650,651,652,653,655,656,664,665,668,674,676,681,682,683,684,685,686,687,688,690,691,692,693,695,696,704,705,708,709,710,711,712,713,714,716,717,718,720,735,736,744,745,759,761,762,763,765,766,767,768,769,770,771,772,773,775,776,777,778,779,780,781,782,783,784,785,788,789,790,791,793,794,795,796,797,798,803,805,806,807,808,809,810,811,812,813,815,816,817,818,819,820,821,822,823,824,825,828,831,833,843,845,846,868,869,870,871,873,874,875,876,883,885,886,888,889,890,891,893,894,896,897,898,899,900,902,903,905,906,908,909,916,923,925,926,928,929,930,931,933,934,936,937,938,939,940,942,943,945,946,948,949,951,952,953,954,956,963,973,974,979,980,982,983,985,986,988,989,991,994,996,1003,1005,1006,1007,1008,1009,1011,1012,1013,1014,1015,1016,1017,1019,1020,1022,1023,1025,1026,1028,1029,1031,1034,1036,1043,1045,1046,1047,1048,1049,1051,1052,1053,1054,1055,1056,1057,1059,1060,1065,1066,1068,1069,1071,1074,1076,1083,1085,1086,1099,1100,1101,1102,1103,1104,1105,1106,1108,1109,1111,1112,1113,1114,1116,1123,1125,1126,1128,1129,1131,1132,1134,1135,1136,1137,1139,1140,1141,1142,1143,1144,1145,1146,1156,1163,1168,1169,1171,1172,1174,1177,1185,1186,1187,1188,1190,1191,1193,1194,1195,1196,1203,1205,1206,1207,1208,1209,1211,1212,1214,1217,1218,1219,1221,1222,1223,1225,1226,1227,1228,1230,1231,1233,1234,1235,1236,1243,1245,1246,1247,1248,1249,1251,1252,1254,1259,1261,1263,1276,1283,1285,1286,1291,1292,1294,1295,1296,1297,1298,1299,1301,1303,1304,1305,1307,1308,1310,1311,1313,1314,1316,1323,1325,1326,1328,1329,1331,1332,1338,1339,1341,1345,1347,1348,1350,1351,1353,1354,1356,1363,1365,1366,1368,1369,1371,1372,1373,1374,1375,1376,1378,1379,1381,1382,1383,1384,1385,1387,1388,1390,1391,1393,1394,1396,1403,1411,1412,1413,1414,1415,1416,1430,1431,1436,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1468,1469,1470,1471,1472,1473,1474,1475,1506,1508,1546,1548,1587]
  let cellsWithWalls = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,157,158,159,160,161,162,197,198,199,200,201,202,237,238,239,240,241,242,277,278,279,280,281,282,317,318,319,320,321,322,357,358,359,360,361,362,397,398,399,400,401,402,437,438,439,440,441,442,477,478,479,480,481,482,517,518,519,520,521,522,557,558,559,560,561,562,597,598,599,600,601,602,637,638,639,640,641,642,677,678,679,680,681,682,717,718,719,720,721,722,757,758,759,760,761,762,797,798,799,800,801,802,837,838,839,840,841,842,877,878,879,880,881,882,917,918,919,920,921,922,957,958,959,960,961,962,997,998,999,1000,1001,1002,1037,1038,1039,1040,1041,1042,1077,1078,1079,1080,1081,1082,1117,1118,1119,1120,1121,1122,1157,1158,1159,1160,1161,1162,1197,1198,1199,1200,1201,1202,1237,1238,1239,1240,1241,1242,1277,1278,1279,1280,1281,1282,1317,1318,1319,1320,1321,1322,1357,1358,1359,1360,1361,1362,1397,1398,1399,1400,1401,1402,1437,1438,1439,1440,1441,1442,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1506,1507,1508,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1546,1547,1548,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1586,1587,1588,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,]

  // const cellsWithItems = [167,168,169,170,171,172,173,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,206,209,214,219,227,235,246,249,254,259,267,275,286,289,294,299,307,315,326,329,334,339,347,355,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,395,404,412,415,423,426,427,431,435,444,452,455,463,466,467,471,472,473,474,475,484,492,495,496,497,501,502,504,505,506,507,511,524,532,535,538,541,545,551,564,565,566,567,568,569,572,575,578,581,585,591,592,593,594,595,609,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,635,649,654,666,667,675,689,694,706,707,715,724,725,726,727,728,730,731,732,733,734,746,747,748,749,750,751,752,753,754,755,764,774,786,787,792,804,814,826,827,832,844,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,872,884,887,892,895,901,904,907,910,911,912,913,914,924,927,932,935,941,944,947,950,955,964,965,966,967,968,969,970,971,972,975,976,977,981,984,987,990,995,1004,1010,1018,1021,1024,1027,1030,1035,1044,1050,1058,1061,1062,1063,1064,1067,1070,1075,1084,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1107,1110,1115,1124,1127,1130,1133,1138,1147,1148,1149,1150,1151,1152,1153,1154,1164,1165,1166,1167,1170,1173,1178,1179,1180,1181,1182,1183,1184,1189,1192,1204,1210,1213,1220,1224,1229,1232,1244,1250,1253,1260,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1284,1288,1289,1290,1293,1300,1306,1309,1312,1315,1324,1327,1330,1334,1335,1336,1337,1340,1346,1349,1352,1355,1364,1367,1370,1377,1380,1386,1389,1392,1395,1405,1406,1407,1408,1409,1410,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1432,1433,1434]

  const cellsWithTeleport = [67,721,758,1547]
  const cellsWithTeleportExit = [1507,757,722,107]
  const cellsWithBoundary = [657,658,659,660,661,662,663]
  // const cellsWithMarkers = [368,378,613,504,626,851,865,913,1148,1427,1181,1092,1330,1204]
  const cellsWithMarkers = []
 
  //! this is exact opposite of cells with Teleport, so may be redundant
  

  //* items

  const itemObjects = [
    {
      itemName: 'normal star',
      score: 100,
      class: 'item',
      image: 'item',
      additionalEffect: 'nothing',
      cellsWithItem: [167,168,169,170,171,172,173,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,206,209,214,219,227,235,246,249,254,259,267,275,286,289,294,299,307,315,326,329,334,339,347,355,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,395,404,412,415,423,426,427,431,435,444,452,455,463,466,467,471,472,473,474,475,484,492,495,496,497,501,502,504,505,506,507,511,524,532,535,538,541,545,551,564,565,566,567,568,569,572,575,578,581,585,591,592,593,594,595,609,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,635,649,654,666,667,675,689,694,706,707,715,724,725,726,727,728,730,731,732,733,734,746,747,748,749,750,751,752,753,754,755,764,774,786,787,792,804,814,826,827,832,844,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,872,884,887,892,895,901,904,907,910,911,912,913,914,924,927,932,935,941,944,947,950,955,964,965,966,967,968,969,970,971,972,975,976,977,981,984,987,990,995,1004,1010,1018,1021,1024,1027,1030,1035,1044,1050,1058,1061,1062,1063,1064,1067,1070,1075,1084,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1107,1110,1115,1124,1127,1130,1133,1138,1147,1148,1149,1150,1151,1152,1153,1154,1164,1165,1166,1167,1170,1173,1178,1179,1180,1181,1182,1183,1184,1189,1192,1204,1210,1213,1220,1224,1229,1232,1244,1250,1253,1260,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1284,1288,1289,1290,1293,1300,1306,1309,1312,1315,1324,1327,1330,1334,1335,1336,1337,1340,1346,1349,1352,1355,1364,1367,1370,1377,1380,1386,1389,1392,1395,1405,1406,1407,1408,1409,1410,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1432,1433,1434]
      // cellsWithItem: [167,168,169,170,171,172,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,206,209,214,219]
    },
    {
      itemName: 'big star',
      score: 1000,
      class: 'big_star',
      image: 'big_star',
      additionalEffect: 'invincibility',
      cellsWithItem: [166,195,1404,1435]
      // cellsWithItem: [166]
    },
    {
      itemName: 'blue star',
      score: 500,
      class: 'blue_star',
      image: 'blue_star',
      additionalEffect: 'nothing',
      cellsWithItem: [174,179,498,503,847,915,978,1155,1287,1333]
      // cellsWithItem: [173,174,179]
    }
  ]



  //* page elements
  const grid = document.querySelector('.grid')
  const cover = document.querySelector('.cover')
  const gameEndCover = document.querySelector('.game_end_cover')
  const playAgainButton = document.querySelector('#play_again')
  const startButton = document.querySelector('#start')
  const gameStartWrapper = document.querySelector('.game_start_wrapper')
  const gameStartCover = document.querySelector('.game_start_cover')

  //* status display
  const scoreDisplay = document.querySelector('.score')
  const scoreDisplayWrapper = document.querySelector('.score_wrapper')
  let score = 0
  const gameStatus = 'play'  //!for pause setting.
  const lifeDisplay = document.querySelector('#life')

  

  // * Variables
  const width = 40
  const height = 40
  const cellCount = width * height
  const outerCells = []
  const cells = []
  const innerCells = []
  const lifeCounters = []
  const defaultMotion = ['right','left','up','down']
  const flickerStateDuration = 3000
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
    knockOutGif: 'hurt.gif',
    defaultPosition: 729,
    position: 729,
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
      // class: 'cpuOneClass',
      staticGif: 'sleep.gif', 
      motionGif: 'down.gif',
      knockOutGif: 'hurt.gif',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 737,
      position: 737,
      display: document.createElement('div'),
      defaultTarget: {
        position: 0,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [100,200,300],
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
    },
    {
      name: 'two',
      // class: 'cpuOneClass',
      staticGif: 'sleep.gif',
      motionGif: 'down.gif',
      knockOutGif: 'hurt.gif',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 743,
      position: 743,
      display: document.createElement('div'),
      defaultTarget: {
        position: 39,
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
      moodRange: ['scatter_A','scatter_B','cunning_A','cunning_B','wander'],
      mood: 'wander',
      moodTimer: 0,
    },
    {
      name: 'three',
      // class: 'cpuOneClass',
      staticGif: 'sleep.gif',
      motionGif: 'down.gif',
      knockOutGif: 'hurt.gif',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 739,
      position: 739,
      display: document.createElement('div'),
      defaultTarget: {
        position: 1560,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [100,200,300],
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
    },
    {
      name: 'four',
      // class: 'cpuOneClass',
      staticGif: 'sleep.gif',
      motionGif: 'down.gif',
      knockOutGif: 'hurt.gif',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 741,
      position: 741,
      display: document.createElement('div'),
      defaultTarget: {
        position: 1599,
        horizontalPosition: null,
        verticalPosition: null,
      },
      target: null,
      facingDirection: 'down',
      speedRange: [100,200,200],
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



  //TODO cpu control
  //! somthing could trigger cpu status to change (some kind of timer?)
  //! needs to ensure this doesn't trigger when game is already complete

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
  }

  
  //TODO
  // page display

  const playerPositionDisplay = document.querySelector('#player_position')
  const cpuOnePositionDisplay = document.querySelector('#cpu_one_position')
  const cpuTwoPositionDisplay = document.querySelector('#cpu_two_position')
  const wallPositionDisplay = document.querySelector('#wall_position')
  const itemPositionDisplay = document.querySelector('#item_position')



  
  // * Make a grid 
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const outerCell = document.createElement('div')
      const cell = document.createElement('div')
      // const innerCell = document.createElement('div')
      cell.setAttribute('id', i)
      outerCell.classList.add('outer_cell')
      cell.classList.add('cell')
      // cell.innerText = i
      outerCell.appendChild(cell)
      grid.appendChild(outerCell)
      // cell.appendChild(innerCell)
      outerCells.push(outerCell)
      cells.push(cell)
      // innerCells.push(innerCell)
    }
  } 

  //* initialise

  let constantCheck = null
  let moodInterval = null



  function triggerGameStart(){
    
    countDown()

    setInterval(()=>{   //* readjusts actor display sizes incase player resizes window
      reAdjustActorSize(player)
  
      cpuObjects.forEach(cpu =>{
        reAdjustActorSize(cpu)
      })
    },1000)
  
    createGrid()

    //TODO remove later
    outerCells.forEach(cell => {
      cell.addEventListener('click', makeWall)
      // cell.addEventListener('click', makeItem)
    })
    
    outerCells.forEach(cell => {
      cell.addEventListener('dblclick', removeWall)
      // cell.addEventListener('click', makeItem)
    })

    //TODO remove later


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
    constantCheck = setInterval(() =>{
      rePositionAllActorImages() // this is to ensure player image stays in right place despite screen resize
      checkPlayerAndCpuCollision()
      controlCpuActivation()
      triggerTeleport()
    },10)

    moodInterval = setInterval(()=>{
      moodTimerCount()
    },1000)
  }

  function populateItems(){
    itemObjects.forEach( item =>{
      populateCells(item.cellsWithItem,item.class)
    })
    blueStarCollected = 0
  }

  function countDown(){  // count down circle animation when game starts aand resets
    gameStartWrapper.classList.add('move_down')
      
    gameStartCover.classList.remove('display')
    const countDownCircle = document.createElement('div')
    countDownCircle.classList.add('countdown_circle')

    setTimeout(() =>{
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
      clearInterval(cpu.motionInterval)
      
      displayActorImage(cpu)
      cpu.motionInterval = setInterval(
        function(){ 
          if (cpu.status === 'active'){
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
      if (cpu.status === 'inactive') {
        cpu.display.style.top = `${cells[cpu.position].getBoundingClientRect().y}px`
        cpu.display.style.left = `${cells[cpu.position].getBoundingClientRect().x}px`
      }
    })
  }
  


  //TODO muteki

  function turnPlayerInvincible(){
    player.display.classList.add('invincible')

    setTimeout(() =>{
      player.display.classList.remove('invincible')
      player.staticGif = `${player.facingDirection}.gif`  // change back to normal appearance
      player.display.innerHTML = `<img src = "assets/${player.staticGif}" ></img>` 
      knockOutCpuCounter = 1
      // to pause this, I would need to, have alternative way to count invincibility.
    },7000)
  }


  function knockOutCpu(cpu){
  
    cpu.status = 'inactive'
    displayKnockOutAnimation(cpu) 
    score += 500 * knockOutCpuCounter
    const scoreEarned = 500 * knockOutCpuCounter
    knockOutCpuCounter += 1

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
      scoreDisplay.innerHTML = score
      scoreDisplayWrapper.classList.add('animate')
    },1000)

    setTimeout(() =>{                     // animate score board
      scoreDisplayWrapper.classList.remove('animate')
    },1200)

    setTimeout(() =>{
      // returns cpu to default position, but harmless until hidden class is removed
      // removeCpu(cpu.position,cpu.class)
      removeActor(cpu)
    },5000)

    setTimeout(() =>{
      cpu.position = cpu.defaultPosition

      addCpu(cpu)
      displayActorImage(cpu) //syncs actor image with actual position
      cpu.display.classList.remove('hidden')
      cpu.display.classList.add('fadein')
    },7000)

    setTimeout(() =>{
      cpu.display.classList.remove('fadein')
      changeStatusToActive(cpu)
    },10000)
  }



  function changeStatusToActive(cpu){
    if (itemToCollect > 0 && !cpu.display.classList.contains('fadein')){  //* this added to ensure cpus do not recover when game is already complete, and also prevents controlCpu's activate actions.
      cpu.status = 'active'
    }
  }


  
  function animateSparkle(cpu){  //this is the sparkle that appears when cpu is defeated
    cpu.knockOutAnimationDisplay = document.createElement('div')
    cpu.knockOutAnimationDisplay.classList.add('effect_animation_slow')
    cpu.knockOutAnimationDisplay.innerHTML = '<img src = "assets/sparkle.gif" ></img>'      

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
    },8000)
  }  


  function playerLoseLife(){

    displayKnockOutAnimation(player)
    
    if (player.life > 0){
      bringBackPlayerToPlay()
    } else {
      gameOverEvent()
    }  
  }
  
  function displayKnockOutAnimation(actor){
    actor.display.classList.add('hidden')     // stops actor and prevents further playerLoseLife

    actor.knockOutAnimationDisplay = document.createElement('div')  // displays hurt animation
    actor.knockOutAnimationDisplay.classList.add('effect_animation_fast')
    actor.knockOutAnimationDisplay.innerHTML = `<img src = "assets/${actor.knockOutGif}" ></img>`
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

      const lifeDisplayAnimation = document.createElement('div')
      lifeDisplayAnimation.classList.add('effect_animation_medium')
      lifeDisplayAnimation.innerHTML = '<img src = "assets/down.gif" ></img>'      
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

        setTimeout(function(){  
          player.display.classList.remove('flicker')     
        },flickerStateDuration) 

      },1000)

    },1000)
  }
  
  function gameOverEvent(){
    console.log('game over!')
    const gameOverText = document.querySelector('.game_end_text')
    playAgainButton.classList.add('display')
    gameOverText.innerHTML = 'game over!!'
    gameOverText.classList.add('display')
    gameEndCover.classList.add('shade')
  
  }




  

  //TODO jyunbi

  
  function resetStaticGifAndDisplayActors(){
    player.staticGif = 'down.gif'
    displayActorImage(player)
    cpuObjects.forEach(cpu=>{
      cpu.staticGif = 'sleep.gif'
      displayActorImage(cpu)
    })
  }

  

  function resetGame(){
    cover.innerHTML = ''  // wipe cover to remove actor images
    playAgainButton.classList.remove('display')
    gameEndCover.classList.remove('shade') // hide game over message
    score = 0
    clearInterval(moodInterval)
    clearInterval(constantCheck)
    itemToCollect = itemTotal
    scoreDisplay.innerHTML = score
    player.life = player.defaultLife   // reset player life total
    displayPlayerLife()

    populateItems()
    
    countDown()

    setTimeout(() =>{

      //! control how enemies start to move?
      cpuObjects.forEach(cpu =>{  // remove old position before reinitialising
        // removeCpu(cpu.position,cpu.class)
        removeActor(cpu)
      })
      initialiseCpus(cpuObjects) 
      // removePlayer(player.position)
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


  function printPosition(){
    playerPositionDisplay.innerHTML = `${player.position} Horizontal:${player.horizontalPosition} Vertical:${player.verticalPosition} item left:${itemToCollect} blueStar collected:${blueStarCollected}`
    // cpuOnePositionDisplay.innerHTML = `${cpuObjects[0].position} Horizontal:${cpuObjects[0].verticalPosition} Vertical:${cpuObjects[0].verticalPosition} cpu motion: ${cpuObjects[0].motion} cpu facing ${cpuObjects[0].facingDirection}`
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`

    cpuOnePositionDisplay.innerHTML = `cpuOne status:${cpuObjects[0].status} / cpuOne mood:${cpuObjects[0].mood.split('_')[0]} / cpuOne moodTimer:${cpuObjects[0].moodTimer} / cpuOne target:${cpuObjects[0].target} cpuOne speed:${cpuObjects[0].speed}`

    cpuTwoPositionDisplay.innerHTML = `cpuTwo status:${cpuObjects[1].status} / cpuTwo mood:${cpuObjects[1].mood} / cpuTwo moodTimer:${cpuObjects[1].moodTimer} / cpuTwo target:${cpuObjects[1].target} cpuTwo speed:${cpuObjects[1].speed}`
  }
  

  function displayPlayerLife(){
    lifeDisplay.innerHTML = ''
    for (let i = 0; i < player.life; i++ ){
      const lifeCounter = document.createElement('div')
      lifeCounter.classList.add('life_counter')
      lifeCounter.innerHTML = '<img src = "assets/down.gif" ></img>'
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

    actor.display.innerHTML = `<img src = "assets/${actor.staticGif}" ></img>`

    const currentActor = cells[actor.position].getBoundingClientRect()
    actor.display.style.top = `${currentActor.y}px`
    actor.display.style.left = `${currentActor.x}px`
    actor.display.style.height = `${cells[0].getBoundingClientRect().height}px`
    actor.display.style.width = `${cells[0].getBoundingClientRect().width}px`
  
    cover.appendChild(actor.display)    
  }


  function changeActorImageAndMoveToNewPosition(actor){
    actor.display.innerHTML = `<img src = "assets/${actor.motionGif}" ></img>`
    actor.display.style.top = `${cells[actor.position].getBoundingClientRect().y}px`
    actor.display.style.left = `${cells[actor.position].getBoundingClientRect().x}px`
    
    setTimeout(function(){
      actor.display.innerHTML = `<img src = "assets/${actor.staticGif}" ></img>`
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
    

    if (cpu.mood.split('_')[0] === 'scatter'){  
      setActorPosition(cpu.defaultTarget)
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


  //TODO tekiugoki

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
    
    //!  markers added for experiment, take out later  
    if (cpu.facingDirection === 'left' && isElementInFacingDirection(cpu,'marker')){ 
      cpu.motion = ['right','up','down']
    }

    if (cpu.facingDirection === 'right' && isElementInFacingDirection(cpu,'marker')){ 
      cpu.motion = ['left','up','down']
    }

    if (cpu.facingDirection === 'down' && isElementInFacingDirection(cpu,'marker')){ 
      cpu.motion = ['right','left','up']
    }
    
    //* when facing right or left and wall is on facing direction
    if ((cpu.facingDirection === 'right' && isElementInFacingDirection(cpu,'wall')) || (cpu.facingDirection === 'left' && isElementInFacingDirection(cpu,'wall'))){
      cpu.motion = ['up','down']
    }

    //* when facing down or up and wall is on facing direction
    if ((cpu.facingDirection === 'down' && isElementInFacingDirection(cpu,'wall')) || (cpu.facingDirection === 'up' && isElementInFacingDirection(cpu,'wall'))){
      cpu.motion = ['left','right']
    }
    
    //! below possibly not necessary, but maybe useful when running away from player?
    // if (isElementAbove(cpu,'wall') && isElementOnRightOf(cpu,'wall')){  // when wall at top and right
    //   cpu.motion = ['down','left']
    // } 
    // if (isElementAbove(cpu,'wall') && isElementOnLeftOf(cpu,'wall')){  // when wall at top and left
    //   cpu.motion = ['right','down']
    // }
    // if (isElementBelow(cpu,'wall') && isElementOnRightOf(cpu,'wall')){  // when wall at bottom and right
    //   cpu.motion = ['up','left']
    // }
    // if (isElementBelow(cpu,'wall') && isElementOnLeftOf(cpu,'wall')){   // when wall at bottom and left
    //   cpu.motion = ['up','right']
    // }
    
    if (player.display.classList.contains('invincible')){ //* run away from player
      avoidTarget(cpu)
      resetCpuSpeed(cpu)
      return
    }
    

    if (!cpu.mood.split('_')[0] === 'wander'){
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
      cpu.motionGif = `${cpu.name}_${cpuFacingDirection}.gif`
  
    } else {
      cpu.staticGif = `flee_${cpuFacingDirection}.gif`
      cpu.motionGif = `flee_${cpuFacingDirection}.gif`
    
    }
  }


  

  //! this might be called from object or array if CPUs shared similar function
  //! this may potentially be renamed cpuOneMovement... 

  //* Move cpu
  function cpuMovement(cpu) {

    if (cpu.status === 'inactive'){
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

    // //TODO backend
    printPosition()
  }
  
 
  //* player related motions

  function addPlayer(position) {
    cells[position].classList.add(player.class)
    setActorPosition(player)
  }

 


  function takeItemAndEarnScore(itemObjectArray){
    if (player.display.classList.contains('flicker')){ // prevents player taking item when in flicker state
      return
    }
    
    if (outerCells[player.position].classList.contains(itemObjectArray.class)){
      outerCells[player.position].classList.remove(itemObjectArray.class)

      //animate items when taken
      const currentPlayerPosition = outerCells[player.position].getBoundingClientRect()
      
      const itemTaken = document.createElement('div')
      itemTaken.classList.add('effect_animation')
      itemTaken.innerHTML = `<img src = "assets/${itemObjectArray.image}.gif" ></img>`
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
        score += itemObjectArray.score
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
  
  //TODO shunkan ido

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

  //TODO player

  // * Move Player
  function handleMovementWithKey(e) {

    if (player.display.classList.contains('hidden')){
      return
    }

    // removePlayer(player.position)
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
      player.motionGif = `${directionString}.gif`

    } else {

      player.staticGif = `invi_${directionString}.gif`
      player.motionGif = `invi_${directionString}.gif`
      
    }
  }

  //* events
  document.addEventListener('keyup', handleMovementWithKey)

  startButton.addEventListener('click', triggerGameStart)
  playAgainButton.addEventListener('click',resetGame)

 

  // ! used to make walls to develop levels
  function makeWall(e) {
    e.target.classList.add('wall')
    cellsWithWalls.push(cells.indexOf(e.target))
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  }

  function removeWall(e) {
    e.target.classList.remove('wall')
    const filteredCell = cellsWithWalls.filter(cell=>{
      return cell !== cells.indexOf(e.target)
    })
    cellsWithWalls = filteredCell
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  }


}

window.addEventListener('DOMContentLoaded', init)


//TODO switch template
// switch (key) {
//   case 'right':
//     if (cpu.horizontalPosition < width - 1 && !isElementOnRightOf(cpu,'wall')) cpu.position++ 
//     break
//   case 'left': 
//     if (cpu.horizontalPosition > 0 && !isElementOnLeftOf(cpu,'wall')) cpu.position--
//     break
//   default:
//     console.log('cpu invalid command')
// }


// function makeItem(e) {
//   e.target.classList.add('item')
//   cellsWithItems.push(cells.indexOf(e.target))
//   itemPositionDisplay.innerHTML = `${cellsWithItems}`
// }


// function removePlayer(position) {
//   cells[position].classList.remove(player.class)
// }


// function removeCpu(position,classToRemove) {  // * Remove cpu from the grid
//   cells[position].classList.remove(classToRemove)
// }

// function isWallOnRightOf(actor){
//   return outerCells[(actor.position + 1)].classList.contains('wall')
// }

// function isWallOnLeftOf(actor){
//   return outerCells[(actor.position - 1)].classList.contains('wall')
// }

// function isWallAbove(actor){
//   return outerCells[(actor.position - width)].classList.contains('wall')
// }

// function isWallBelow(actor){
//   return outerCells[(actor.position + width)].classList.contains('wall')
// }



//TODO redundant
// setInterval(function(){
//   console.log(cpuObjects[0].position) 
//   console.log(player.position)
// },1000)

//! used to make walls to develop levels
// function makeWall(e) {
//   e.target.classList.add('wall')
//   cellsWithWalls.push(cells.indexOf(e.target))
//   wallPositionDisplay.innerHTML = `${cellsWithWalls}`
// }

// function makeItem(e) {
//   e.target.classList.add('item')
//   cellsWithItems.push(cells.indexOf(e.target))
//   itemPositionDisplay.innerHTML = `${cellsWithItems}`
// }

  

// function startGame(){
//   createGrid()
//   displayActorImage(player)
//   addPlayer(player.position)
//   displayPlayerLife()
//   populateCells(cellsWithWalls,'wall')
//   populateCells(cellsWithTeleport,'teleport')
//   populateCells(cellsWithItems,'item')
//   populateCells(cellsWithBigStars,'big_star')

//   initialiseCpus(cpuObjects)  
    
//   //* checking for status
//   setInterval(function(){
//     rePositionImage(player) // this is to ensure player image stays in right place despite screen resize
//     checkPlayerAndCpuCollision()
//     triggerTeleport()
//   // rePositionImage(cpuOne) // may not be necessary?(cpu moves anyway)
//   },100)
  
// }
  
//! decide what to include in start game (arguably, elements can be created soon as page is loaded. start game could just enable player to move etc.)
// startGame()


  

//// function initiateCpu(cpu){
////   displayTargetImage(cpu)
////  setInterval(function(){
////     cpuMovement(cpu)
////   },cpu.speed)
////   addCpu(cpu,cpu.position,cpu.class)
//// }
  

// const cpuOneDefaultTarget = {
//   position: 378,
//   horizontalPosition: null,
//   verticalPosition: null,
// }

// const cpuTwoDefaultTarget = {
//   position: 1280,
//   horizontalPosition: null,
//   verticalPosition: null,
// }