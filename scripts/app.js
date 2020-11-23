

//! if you can't click, you need to disable cover
//TODO add alt to images

////something needs to be added to react to user changing viewport size




function init() {
  
  //*items and wall positions
  const cellsWithWalls = [26,28,66,68,106,108,126,127,128,129,130,131,132,133,134,135,138,139,140,141,142,143,144,145,146,148,149,150,151,152,153,154,155,165,175,178,196,205,207,208,210,211,212,213,215,218,220,221,222,223,224,225,226,228,229,230,231,232,233,234,236,245,247,248,250,253,255,258,260,266,268,274,276,285,287,288,290,293,295,298,300,306,308,314,316,324,325,327,328,330,331,332,333,335,336,337,338,340,341,342,343,344,345,346,348,349,350,351,352,354,356,363,392,394,396,403,405,406,407,408,409,410,411,413,414,415,417,418,419,420,421,422,424,425,426,428,429,430,432,433,434,436,443,445,451,453,454,455,457,458,459,460,461,462,464,465,466,468,470,476,483,485,491,508,510,512,513,514,515,516,523,525,526,527,528,529,530,531,533,546,548,550,552,553,554,555,556,563,570,571,573,586,588,590,596,604,605,606,607,608,610,611,613,626,628,630,631,632,633,634,636,648,650,651,653,654,655,656,657,658,659,660,661,662,663,664,665,666,668,674,676,680,681,682,683,684,685,686,687,688,690,691,693,694,695,696,697,704,705,706,708,709,710,711,712,713,714,716,717,718,719,738,743,760,761,762,763,765,766,767,768,770,771,772,773,774,775,776,778,783,785,786,788,789,790,791,792,793,794,795,796,797,798,799,803,805,806,807,808,810,811,812,813,814,815,816,818,819,820,821,822,823,825,826,828,836,843,845,846,868,869,870,871,872,873,874,875,876,883,885,886,888,889,890,891,893,894,896,897,898,899,900,902,903,905,906,908,909,916,923,925,926,928,929,930,931,933,934,936,937,938,939,940,942,943,945,946,948,949,951,952,953,954,956,963,973,974,979,980,982,983,985,986,988,989,991,994,996,1003,1005,1006,1007,1008,1009,1011,1012,1013,1014,1015,1016,1017,1019,1020,1022,1023,1025,1026,1028,1029,1031,1034,1036,1043,1045,1046,1047,1048,1049,1051,1052,1053,1054,1055,1056,1057,1059,1060,1065,1066,1068,1069,1071,1074,1076,1083,1085,1086,1099,1100,1101,1102,1103,1104,1105,1106,1108,1109,1111,1112,1113,1114,1116,1123,1125,1126,1128,1129,1131,1132,1134,1135,1136,1137,1139,1140,1141,1142,1143,1144,1145,1146,1156,1163,1168,1169,1171,1172,1174,1177,1185,1186,1187,1188,1190,1191,1193,1194,1195,1196,1203,1205,1206,1207,1208,1209,1211,1212,1214,1217,1218,1219,1221,1222,1223,1225,1226,1227,1228,1230,1231,1233,1234,1235,1236,1243,1245,1246,1247,1248,1249,1251,1252,1254,1259,1261,1263,1276,1283,1285,1286,1291,1292,1294,1295,1296,1297,1298,1299,1301,1303,1304,1305,1307,1308,1310,1311,1313,1314,1316,1323,1325,1326,1328,1329,1331,1332,1338,1339,1341,1345,1347,1348,1350,1351,1353,1354,1356,1363,1365,1366,1368,1369,1371,1372,1373,1374,1375,1376,1378,1379,1381,1382,1383,1384,1385,1387,1388,1390,1391,1393,1394,1396,1403,1411,1412,1413,1414,1415,1416,1430,1431,1436,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1468,1469,1470,1471,1472,1473,1474,1475,1506,1508,1546,1548,1586,1588,27,720,759,1587]

  

  // const cellsWithItems = [167,168,169,170,171,172,173,174,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,206,209,214,219,227,235,246,249,254,259,267,275,286,289,294,299,307,315,326,329,334,339,347,355,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,395,404,412,416,423,427,431,435,444,452,456,463,467,471,472,473,474,475,484,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,511,524,532,547,551,564,565,566,567,568,569,572,587,591,592,593,594,595,609,612,627,635,649,652,667,675,689,692,707,715,724,725,726,727,728,729,730,731,732,733,734,735,736,737,744,745,746,747,748,749,750,751,752,753,754,755,764,769,777,784,787,804,809,817,824,827,844,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,884,887,892,895,901,904,907,910,911,912,913,914,915,924,927,932,935,941,944,947,950,955,964,965,966,967,968,969,970,971,972,975,976,977,978,981,984,987,990,995,1004,1010,1018,1021,1024,1027,1030,1035,1044,1050,1058,1061,1062,1063,1064,1067,1070,1075,1084,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1107,1110,1115,1124,1127,1130,1133,1138,1147,1148,1149,1150,1151,1152,1153,1154,1155,1164,1165,1166,1167,1170,1173,1178,1179,1180,1181,1182,1183,1184,1189,1192,1204,1210,1213,1220,1224,1229,1232,1244,1250,1253,1260,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1284,1287,1288,1289,1290,1293,1300,1306,1309,1312,1315,1324,1327,1330,1333,1334,1335,1336,1337,1340,1346,1349,1352,1355,1364,1367,1370,1377,1380,1386,1389,1392,1395,1405,1406,1407,1408,1409,1410,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1432,1433,1434]

  const cellsWithTeleport = [67,721,758,1547]
  const cellsWithTeleportExit = [1507,757,722,107]
  //! this is exact opposite of cells with Teleport, so may be redundant
  
  // const cellsWithBigStars = [166,195,1404,1435]

  const cellsWithItems = [167,168,169,170,171,172,173,174]
  const cellsWithBigStars = [166]


  //* page elements
  const grid = document.querySelector('.grid')
  const cover = document.querySelector('.cover')
  const gameOverCover = document.querySelector('.game_over_cover')
  const playAgainButton = document.querySelector('#play_again')



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
  const itemTotal = cellsWithItems.length + cellsWithBigStars.length
  let knockOutCpuCounter = 1
  let itemToCollect = itemTotal

  
  //* actors
  const player = {
    class: 'player_down',
    name: 'cat blob',
    staticGif: 'down.gif',
    motionGif: 'down.gif',
    hurtGif: 'hurt.gif',
    defaultPosition: 209,
    position: 209,
    display: document.createElement('div'),
    prevPosition: null,
    facingDirection: 'down',
    horizontalPosition: null,
    verticalPosition: null,
    defaultLife: 3,
    life: 3,
    knockOutAnimationDisplay: null,
    // setPosition(){
    //   this.horizontalPosition = this.position % width
    //   this.verticalPosition = Math.floor(this.position / width)
    // },
  }

  const cpuOneDefaultTarget = {
    position: 378,
    horizontalPosition: null,
    verticalPosition: null,
    setPosition(){
      this.horizontalPosition = this.position % width
      this.verticalPosition = Math.floor(this.position / width)
    },
  }

  const cpuTwoDefaultTarget = {
    position: 1280,
    horizontalPosition: null,
    verticalPosition: null,
    setPosition(){
      this.horizontalPosition = this.position % width
      this.verticalPosition = Math.floor(this.position / width)
    },
  }


  const cpuObjects = [
    {
      name: 'one',
      // class: 'cpuOneClass',
      staticGif: 'down.gif',
      motionGif: 'down.gif',
      hurtGif: 'hurt.gif',
      // staticGifOption: [],
      // motionGifOption: [],
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 619,
      position: 619,
      display: document.createElement('div'),
      target: [cpuOneDefaultTarget.horizontalPosition,cpuOneDefaultTarget.verticalPosition],
      facingDirection: 'down',
      speed: 200,
      horizontalPosition: null,
      verticalPosition: null,
      motionInterval: null,
      defaultStatus: 'active',
      status: 'active',
      knockOutAnimationDisplay: null,
    },
    {
      name: 'two',
      // class: 'cpuOneClass',
      staticGif: 'down.gif',
      motionGif: 'down.gif',
      hurtGif: 'hurt.gif',
      motion: defaultMotion,
      filteredMotion: [],
      defaultPosition: 621,
      position: 621,
      display: document.createElement('div'),
      target: [cpuTwoDefaultTarget.horizontalPosition,cpuTwoDefaultTarget.verticalPosition],
      facingDirection: 'down',
      speed: 150,
      horizontalPosition: null,
      verticalPosition: null,
      motionInterval: null,
      defaultStatus: 'asleep',
      status: 'asleep',
      knockOutAnimationDisplay: null,
    }
  ]
  
  function setActorPosition(actor){                   // resets horizontal and vertical position of cpu or player
    actor.horizontalPosition = actor.position % width
    actor.verticalPosition = Math.floor(actor.position / width)
  }


  //* status display
  const scoreDisplay = document.querySelector('.score')
  const scoreDisplayWrapper = document.querySelector('.score_wrapper')
  let score = 0
  const lifeDisplay = document.querySelector('#life')
  // const lifeDisplayWrapper = document.querySelector('.life_wrapper')
  

  
  //TODO
  const playerPositionDisplay = document.querySelector('#player_position')
  const cpuOnePositionDisplay = document.querySelector('#cpu_one_position')
  const wallPositionDisplay = document.querySelector('#wall_position')
  const itemPositionDisplay = document.querySelector('#item_position')


  //* SETTINGS

  const itemObjects = [
    {
      itemName: 'normal star',
      score: 100,
      class: 'item',
      image: 'item',
      additionalEffect: 'nothing',
    },
    {
      itemName: 'big star',
      score: 500,
      class: 'big_star',
      image: 'big_star',
      additionalEffect: 'invincibility'
    }
  ]
  
  // * Make a grid 
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const outerCell = document.createElement('div')
      const cell = document.createElement('div')
      const innerCell = document.createElement('div')
      cell.setAttribute('id', i)
      outerCell.classList.add('outer_cell')
      cell.classList.add('cell')
      // cell.innerText = i
      outerCell.appendChild(cell)
      grid.appendChild(outerCell)
      cell.appendChild(innerCell)
      outerCells.push(outerCell)
      cells.push(cell)
      innerCells.push(innerCell)
    }
  } 

  //* initialise

  

  function startGame(){
    createGrid()
    displayActorImage(player)
    initialiseCpus(cpuObjects)  
    addPlayer(player.position)
    displayPlayerLife()
    populateCells(cellsWithWalls,'wall')
    populateCells(cellsWithTeleport,'teleport')
    populateCells(cellsWithItems,'item')
    populateCells(cellsWithBigStars,'big_star')
    
  }
  
  //! decide what to include in start game (arguably, elements can be created soon as page is loaded. start game could just enable player to move etc.)
  startGame()


  //// function initiateCpu(cpu){
  ////   displayTargetImage(cpu)
  ////  setInterval(function(){
  ////     cpuMovement(cpu)
  ////   },cpu.speed)
  ////   addCpu(cpu,cpu.position,cpu.class)
  //// }
  
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
  
 

  //! somthing could trigger cpu status to change (some kind of timer?)
  //! this could be in start game, or somewhere else.
  //! needs to ensure this doesn't trigger when game is already complete
  setTimeout(
    function(){
      if (itemToCollect > 0){
        cpuObjects[1].status = 'active'
      }
    },5000)




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
  

  //* checking for status
  setInterval(function(){
    rePositionImage(player) // this is to ensure player image stays in right place despite screen resize
    checkPlayerAndCpuCollision()
    triggerTeleport()
    // rePositionImage(cpuOne) // may not be necessary?(cpu moves anyway)
  },100)
  
  // turnPlayerInvincible()

  //TODO muteki

  function turnPlayerInvincible(){
    player.display.classList.add('invincible')

    setTimeout(function(){
      player.display.classList.remove('invincible')
      knockOutCpuCounter = 1
    },7000)
  }


  function knockOutCpu(cpu){
  
    cpu.status = 'inactive'
    displayKnockOutAnimation(cpu)
    score += 500 * knockOutCpuCounter
    const scoreEarned = 500 * knockOutCpuCounter
    knockOutCpuCounter += 1

    setTimeout(function(){
      cpu.knockOutAnimationDisplay.innerHTML = scoreEarned
    },400)

    setTimeout(function(){
      cpu.knockOutAnimationDisplay.style.top = `${scoreDisplay.getBoundingClientRect().y}px`
      cpu.knockOutAnimationDisplay.style.left = `${scoreDisplay.getBoundingClientRect().x}px`
    },800)

    setTimeout(function(){
      cover.removeChild(cpu.knockOutAnimationDisplay)
      animateSparkle(cpu)  //* creates a star that floats back to default position
      scoreDisplay.innerHTML = score
      scoreDisplayWrapper.classList.add('animate')
    },1000)

    setTimeout(function(){                     // animate score board
      scoreDisplayWrapper.classList.remove('animate')
    },1200)

    setTimeout(function(){
      // returns cpu to default position, but harmless.
      removeCpu(cpu.position,cpu.class)
    },5000)

    setTimeout(function(){
      cpu.position = cpu.defaultPosition

      addCpu(cpu)
      displayActorImage(cpu) //syncs actor image with actual position
      cpu.display.classList.remove('hidden')
      cpu.display.classList.add('fadein')
    },7000)

    setTimeout(function(){
      cpu.status = 'active'
      cpu.display.classList.remove('fadein')
    },10000)


  }

  function animateSparkle(cpu){
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
    actor.display.classList.add('hidden')                     // stops actor motion and prevents further playerLoseLife

    actor.knockOutAnimationDisplay = document.createElement('div')  // displays hurt animation
    actor.knockOutAnimationDisplay.classList.add('effect_animation_fast')
    actor.knockOutAnimationDisplay.innerHTML = `<img src = "assets/${actor.hurtGif}" ></img>`
    const actorCurrentPosition = cells[actor.position].getBoundingClientRect()

    actor.knockOutAnimationDisplay.style.top = `${actorCurrentPosition.y - ((knockOutCpuCounter - 1) * 10)}px`   
    actor.knockOutAnimationDisplay.style.left = `${actorCurrentPosition.x}px`     
    // actor.knockOutAnimationDisplay.style.left = `${actorCurrentPosition.x + ((knockOutCpuCounter - 1) * 5)}px`
    actor.knockOutAnimationDisplay.style.height = `${actorCurrentPosition.height}px`
    actor.knockOutAnimationDisplay.style.width = `${actorCurrentPosition.width}px`
    cover.appendChild(actor.knockOutAnimationDisplay)

    actor.knockOutAnimationDisplay.classList.add('enlarge')
  }


  function bringBackPlayerToPlay(){

    setTimeout(function(){
      player.knockOutAnimationDisplay.style.top = `${cells[(player.position) % 40].getBoundingClientRect().y}px` // reposition hurt animation to top of screen (same row where playerLoseLife triggered)
    },800)
    
    setTimeout(function(){
      player.knockOutAnimationDisplay.innerHTML = ''

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
    const gameOverText = document.querySelector('.game_over_text')
    playAgainButton.classList.add('display')
    gameOverText.innerHTML = 'game over!!'
    gameOverText.classList.add('display')
    gameOverCover.classList.add('shade')
  
  }

  // gameOverEvent()


  

  //TODO mejirushi
  function setUpGame(){
    // console.log('reset game')

    cover.innerHTML = ''  // wipe cover to remove actor images
    playAgainButton.classList.remove('display')
    gameOverCover.classList.remove('shade') // hide game over message
    
    //! control how enemies start to move?
    cpuObjects.forEach(cpu =>{  // remove old position before reinitialising
      removeCpu(cpu.position,cpu.class)
    })
    initialiseCpus(cpuObjects) 
    
    score = 0
    itemToCollect = itemTotal
    scoreDisplay.innerHTML = score
    player.life = player.defaultLife   // reset player life total
    displayPlayerLife()
    removePlayer(player.position)
    player.position = player.defaultPosition
    addPlayer(player.position)
    displayActorImage(player)
    player.display.classList.remove('hidden')
    
    // reposition items
    populateCells(cellsWithItems,'item')
    populateCells(cellsWithBigStars,'big_star')

  }

  playAgainButton.addEventListener('click',setUpGame)


  
  // * Make walls
  // walls defined by adding class to cells, according to what is mentioned in the array

  function populateCells(array,classToAdd){
    for (let i = 0; i < array.length ; i++) {
      outerCells[array[i]].classList.add(classToAdd)
    }
  }


  function printPosition(){
    playerPositionDisplay.innerHTML = `${player.position} Horizontal:${player.horizontalPosition} Vertical:${player.verticalPosition} item left:${itemToCollect}`
    cpuOnePositionDisplay.innerHTML = `${cpuObjects[0].position} Horizontal:${cpuObjects[0].verticalPosition} Vertical:${cpuObjects[0].verticalPosition} cpu motion: ${cpuObjects[0].motion} cpu facing ${cpuObjects[0].facingDirection}`
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
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
    actor.display.innerHTML = `<img src = "assets/${actor.staticGif}" ></img>`

    const currentActor = cells[actor.position].getBoundingClientRect()
    actor.display.style.top = `${currentActor.y}px`
    actor.display.style.left = `${currentActor.x}px`
    actor.display.style.height = `${currentActor.height}px`
    actor.display.style.width = `${currentActor.width}px`
  
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
    // cpu.setPosition()
    setActorPosition(cpu)
  }


  function removeCpu(position,classToRemove) {  // * Remove cpu from the grid
    cells[position].classList.remove(classToRemove)
  }


  function cpuDetermineTarget(cpu){
    // cpuOneDefaultTarget.setPosition()
    // cpu.target = [cpuOneDefaultTarget.horizontalPosition,cpuOneDefaultTarget.verticalPosition]
    cpu.target = [player.horizontalPosition,player.verticalPosition]
  } 
  

  //! computer get's error when it hits edge of level
  function isWallOnRightOf(actor){
    return outerCells[(actor.position + 1)].classList.contains('wall')
  }

  function isWallOnLeftOf(actor){
    return outerCells[(actor.position - 1)].classList.contains('wall')
  }
  
  function isWallAbove(actor){
    return outerCells[(actor.position - width)].classList.contains('wall')
  }

  function isWallBelow(actor){
    return outerCells[(actor.position + width)].classList.contains('wall')
  }


  //TODO tekiugoki

  function cpuMovementDecision(cpu){

    cpuDetermineTarget(cpu)
    
    //!new logic to be put in here to make it chase or run away from player

    if (cpu.facingDirection === 'right' && !isWallOnRightOf(cpu)){  // when facing right and nothing in the way
      cpu.motion = ['right','right']
    }
    if (cpu.facingDirection === 'left' && !isWallOnLeftOf(cpu)){  // when facing left and nothing in the way
      cpu.motion = ['left','left']
    }
    if (cpu.facingDirection === 'down' && !isWallBelow(cpu)){  // when facing down and nothing in the way
      cpu.motion = ['down','down']
    }
    if (cpu.facingDirection === 'up' && !isWallAbove(cpu)){  // when facing up and nothing in the way
      cpu.motion = ['up','up']
    }
    
    //* when facing right or left and wall is on facing direction
    if ((cpu.facingDirection === 'right' && isWallOnRightOf(cpu)) || (cpu.facingDirection === 'left' && isWallOnLeftOf(cpu))){
      cpu.motion = ['up','down']
    }

    //* when facing down or up and wall is on facing direction
    if ((cpu.facingDirection === 'down' && isWallBelow(cpu)) || (cpu.facingDirection === 'up' && isWallAbove(cpu))){
      cpu.motion = ['left','right']
    }

    if (isWallAbove(cpu) && isWallOnRightOf(cpu)){  // when wall at top and right
      cpu.motion = ['down','left']
    } 
    if (isWallAbove(cpu) && isWallOnLeftOf(cpu)){  // when wall at top and left
      cpu.motion = ['right','down']
    }
    if (isWallBelow(cpu) && isWallOnRightOf(cpu)){  // when wall at bottom and right
      cpu.motion = ['up','left']
    }
    if (isWallBelow(cpu) && isWallOnLeftOf(cpu)){   // when wall at bottom and left
      cpu.motion = ['up','right']
    }
    
    if (player.display.classList.contains('invincible')){ //* run away from player
      avoidTarget(cpu)
      return
    }

    chaseTarget(cpu)
    
  }

  function chaseTarget(cpu){
    if (cpu.horizontalPosition < cpu.target[0]){  //* movement based on target position
      cpu.motion.push('right')
    } else {
      cpu.motion.push('left')
    }

    if (cpu.verticalPosition < cpu.target[1]){
      cpu.motion.push('down')
    } else {
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
    if (cpu.horizontalPosition > cpu.target[0]){  //* movement based on target position
      cpu.motion.push('right')
    } else {
      cpu.motion.push('left')
    }

    if (cpu.verticalPosition > cpu.target[1]){
      cpu.motion.push('down')
    } else {
      cpu.motion.push('up')
    }
    
  }


  

  function turnCpu(cpu,cpuFacingDirection){
    if (!player.display.classList.contains('invincible')){
      switch (cpuFacingDirection) {
        case 'right': 
          cpu.class = 'cpu_right'
          cpu.staticGif = `${cpu.name}_right.gif`
          cpu.motionGif = `${cpu.name}_right.gif`
          break
        case 'left': 
          cpu.class = 'cpu_left'
          cpu.staticGif = `${cpu.name}_left.gif`
          cpu.motionGif = `${cpu.name}_left.gif`
          break
        case 'up': 
          cpu.class = 'cpu_up'
          cpu.staticGif = `${cpu.name}_up.gif`
          cpu.motionGif = `${cpu.name}_up.gif`
          break
        case 'down': 
          cpu.class = 'cpu_down'
          cpu.staticGif = `${cpu.name}_down.gif`
          cpu.motionGif = `${cpu.name}_down.gif`
          break
        default:
          console.log('invalid command')
      }
    } else {
      switch (cpuFacingDirection) {
        case 'right': 
          cpu.class = 'cpu_right'
          cpu.staticGif = 'flee_right.gif'
          cpu.motionGif = 'flee_right.gif'
          break
        case 'left': 
          cpu.class = 'cpu_left'
          cpu.staticGif = 'flee_left.gif'
          cpu.motionGif = 'flee_left.gif'
          break
        case 'up': 
          cpu.class = 'cpu_up'
          cpu.staticGif = 'flee_up.gif'
          cpu.motionGif = 'flee_up.gif'
          break
        case 'down': 
          cpu.class = 'cpu_down'
          cpu.staticGif = 'flee_down.gif'
          cpu.motionGif = 'flee_down.gif'
          break
        default:
          console.log('invalid command')
      }
    }
  }


  

  //! this might be called from object or array if CPUs shared similar function
  //! this may potentially be renamed cpuOneMovement... 

  //* Move cpu
  function cpuMovement(cpu) {

    if (cpu.status === 'inactive'){
      return
    }

    removeCpu(cpu.position,cpu.class) 
    cpuMovementDecision(cpu)
    const motionIndex =  Math.floor(Math.random() * cpu.motion.length)
    cpu.facingDirection = cpu.motion[motionIndex]
    turnCpu(cpu,cpu.motion[motionIndex])
    
    switch (cpu.motion[motionIndex]) {
      case 'right':
        if (cpu.horizontalPosition < width - 1 && !isWallOnRightOf(cpu)) cpu.position++ 
        break
      case 'left': 
        if (cpu.horizontalPosition > 0 && !isWallOnLeftOf(cpu)) cpu.position--
        break
      case 'up': 
        if (cpu.verticalPosition > 0 && !isWallAbove(cpu)) cpu.position -= width
        break
      case 'down':
        if (cpu.verticalPosition < height - 1 && !isWallBelow(cpu)) cpu.position += width
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
    // player.setPosition()
    setActorPosition(player)
  }

  function removePlayer(position) {
    cells[position].classList.remove(player.class)
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
        // itemTaken.style.top = '0'
        // itemTaken.style.left = '100%'
      },100)

      setTimeout(function(){
        cover.removeChild(itemTaken)
        itemToCollect -= 1
        score += itemObjectArray.score
        scoreDisplay.innerHTML = score
        scoreDisplayWrapper.classList.add('animate')
        if (itemToCollect < 1){
          gameCompletionEvent()
          return
        }
      },1000)

      setTimeout(function(){                                 // animate score board
        scoreDisplayWrapper.classList.remove('animate')
      },1200)

    }
  }

  function gameCompletionEvent(){  
    cpuObjects.forEach(cpu => {
      // cpu.display.classList.add('hidden')
      cpu.status = 'inactive'
    })
    const gameCompletionText = document.querySelector('.game_over_text')
    playAgainButton.classList.add('display')
    gameCompletionText.innerHTML = 'complete!!'
    gameCompletionText.classList.add('display')
    gameOverCover.classList.add('shade')

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

  //TODO mejirushi

  // * Move Player
  function handleMovementWithKey(e) {

    if (player.display.classList.contains('hidden')){
      return
    }

    removePlayer(player.position)
    turnPlayer(e.key)

    switch (e.key) {
      case 'ArrowRight': 
        if (player.horizontalPosition < width - 1 && !isWallOnRightOf(player)) player.position++
        break
      case 'ArrowLeft': 
        if (player.horizontalPosition > 0 && !isWallOnLeftOf(player)) player.position--
        break
      case 'ArrowUp': 
        if (player.verticalPosition > 0 && !isWallAbove(player)) player.position -= width
        break
      case 'ArrowDown': 
        if (player.verticalPosition < height - 1 && !isWallBelow(player)) player.position += width
        break
      default:
        console.log('invalid command')
    }

    if (outerCells[player.position].classList.contains('big_star')){
      turnPlayerInvincible()
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
    if (!player.display.classList.contains('invincible')){
      switch (keyPressed) {
        case 'ArrowRight': 
          player.class = 'player_right'
          player.staticGif = 'right.gif'
          player.motionGif = 'right_roll.gif'
          break
        case 'ArrowLeft': 
          player.class = 'player_left'
          player.staticGif = 'left.gif'
          player.motionGif = 'shift_left.gif'
          break
        case 'ArrowUp': 
          player.class = 'player_up'
          player.staticGif = 'up.gif'
          player.motionGif = 'up.gif'
          break
        case 'ArrowDown': 
          player.class = 'player_down'
          player.staticGif = 'down.gif'
          player.motionGif = 'down.gif'
          break
        default:
          console.log('invalid command')
      }
    } else {
      //// console.log('triggered')
      switch (keyPressed) {
        case 'ArrowRight': 
          player.class = 'player_right'
          player.staticGif = 'invi_right.gif'
          player.motionGif = 'invi_right.gif'
          break
        case 'ArrowLeft': 
          player.class = 'player_left'
          player.staticGif = 'invi_left.gif'
          player.motionGif = 'invi_left.gif'
          break
        case 'ArrowUp': 
          player.class = 'player_up'
          player.staticGif = 'invi_up.gif'
          player.motionGif = 'invi_up.gif'
          break
        case 'ArrowDown': 
          player.class = 'player_down'
          player.staticGif = 'invi_down.gif'
          player.motionGif = 'invi_down.gif'
          break
        default:
          console.log('invalid command')
      }
    }
  }

  
  //! used to make walls to develop levels
  function makeWall(e) {
    e.target.classList.add('wall')
    cellsWithWalls.push(cells.indexOf(e.target))
    wallPositionDisplay.innerHTML = `${cellsWithWalls}`
  }

  function makeItem(e) {
    e.target.classList.add('item')
    cellsWithItems.push(cells.indexOf(e.target))
    itemPositionDisplay.innerHTML = `${cellsWithItems}`
  }
  


  //* events
  document.addEventListener('keyup', handleMovementWithKey)

  cells.forEach(cell => {
    // cell.addEventListener('click', makeWall)
    cell.addEventListener('click', makeItem)
  })

  // cells.forEach(cell => {
  //   cell.addEventListener('dblclick', removeWall)
  // })


}

window.addEventListener('DOMContentLoaded', init)





//TODO redundant
// setInterval(function(){
//   console.log(cpuObjects[0].position) 
//   console.log(player.position)
// },1000)