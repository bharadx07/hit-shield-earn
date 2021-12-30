//Javascript Doc: By Bharadwaj D

let hse_game = {
    "income": 100,
    "lives": 100,
    "cash": 850,
    "safe": 0,
    "turn": "P1",
    
    "b-income": 100,
    "b-lives": 100,
    "b-cash": 850,
    'b-safe': 0,
    
    "attacks": {
      "mini_shotgun": {
      "cost": 20,
      "damage": 1,
      
    },
    
    "shotgun": {
      "cost": 50,
      "damage": 5,
      
    },
    
    "fast_firing_shotgun": {
      "cost": 100,
      "damage": 10,
      
    },
    
    "semi_auto_rifle": {
      "cost": 500,
      "damage": 50,
      
    },
    
    "full_auto_rifle": {
      "cost": 1500,
      "damage": 100,
      
    },
    
      
    },
    
    
    "defence": {
      "mini_healer": {
      "cost": 20,
      "heal": 1,
      
    },
    
    "improved_healer": {
      "cost": 50,
      "heal": 5,
      
    },
    
    "epic_healer": {
      "cost": 100,
      "heal": 10,
      
    },
    
    "pro_healer": {
      "cost": 500,
      "heal": 50,
      
    },
    
    "master_healer": {
      "cost": 100,
      "heal": 100,
      
    },
      
     "block_1": {
      "cost": 100,
      "time-stop": 1,
      
    },
      
      "block_2": {
      "cost": 200,
      "time-stop": 2,
      
    },
    
      
    },
    
    "incomes": {
    "mini_boost": {
      "cost": 20,
      "boost": 1,
      
    },
    
    "improved_boost": {
      "cost": 50,
      "boost": 5,
      
    },
    
    "epic_boost": {
      "cost": 100,
      "boost": 10,
      
    },
    
    "pro_boost": {
      "cost": 500,
      "boost": 50,
      
    },
    
    "master_boost": {
      "cost": 1500,
      "boost": 100,
      
    },
    
      
    },
    
    
    
    
    
    
    
    
    
    
    
    
  
  }
  
  
  
  //Master Function
  
  
  initiate_game()
    
  
  
  
  
  function change_1() {
    document.querySelector("#turns").textContent = "Player 1's Turn"
  }
  
  //
  
  function initiate_game() {
    attack_button()
    
    
    setTimeout(change_1, 1000)
    reset_game()
    updateAll()
  
  
    
  }
  
  
  
  //Update All 
  
  //Attacks
  
  function updateAll() {
    document.querySelector("#player-1-cash").textContent = hse_game["cash"]
     document.querySelector("#player-1-lives").textContent = hse_game["lives"]
    document.querySelector("#bot-lives").textContent = hse_game["b-lives"]
    document.querySelector("#bot-cash").textContent = hse_game['b-cash']
  
    
  }
  
  //Upgrade Functions 
  
  function mini_shotgun() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['attacks']['mini_shotgun']['cost']) {
    hse_game["b-lives"] = hse_game["b-lives"]-  hse_game['attacks']['mini_shotgun']['damage']
    hse_game["cash"] =   hse_game["cash"]- hse_game['attacks']['mini_shotgun']['cost']
    updateAll()
    should_end_game()
      
    }
    
  }
    
  function shotgun() {
    hse_game['turn'] = "P1"
   
    if (hse_game['cash']>= hse_game['attacks']['shotgun']['cost']) {
    hse_game["b-lives"] -= hse_game['attacks']['shotgun']['damage']
    hse_game["cash"] -= hse_game['attacks']['shotgun']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  function firing_shotgun() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['attacks']['fast_firing_shotgun']['cost']) {
    hse_game["b-lives"] -= hse_game['attacks']['fast_firing_shotgun']['damage']
    hse_game["cash"] -= hse_game['attacks']['fast_firing_shotgun']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  function semi_auto_rifle() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['attacks']['semi_auto_rifle']['cost']) {
    hse_game["b-lives"] -= hse_game['attacks']['semi_auto_rifle']['damage']
    hse_game["cash"] -= hse_game['attacks']['semi_auto_rifle']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  
  function full_auto_rifle() {
    if (hse_game['cash']>= hse_game['attacks']['full_auto_rifle']['cost']) {
    hse_game["b-lives"] -= hse_game['attacks']['full_auto_rifle']['damage']
    hse_game["cash"] -= hse_game['attacks']['full_auto_rifle']['cost']
    setTimeout(run_bot, 1000)
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  //Defence
  
  function mini_healer() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['defence']['mini_healer']['cost']) {
    hse_game["lives"] += hse_game['defence']['mini_healer']['heal']
    hse_game["cash"] -= hse_game['defence']['mini_healer']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  function improved_healer() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['defence']['improved_healer']['cost']) {
    hse_game["lives"] += hse_game['defence']['improved_healer']['heal']
    hse_game["cash"] -= hse_game['defence']['improved_healer']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  function epic_healer() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['defence']['epic_healer']['cost']) {
    hse_game["lives"] += hse_game['defence']['epic_healer']['heal']
    hse_game["cash"] -= hse_game['defence']['epic_healer']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  function pro_healer() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['defence']['pro_healer']['cost']) {
    hse_game["lives"] += hse_game['defence']['pro_healer']['heal']
    hse_game["cash"] -= hse_game['defence']['pro_healer']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  function master_healer() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['defence']['master_healer']['cost']) {
    hse_game["lives"] += hse_game['defence']['master_healer']['heal']
    hse_game["cash"] -= hse_game['defence']['master_healer']['cost']
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  
  function L1shield() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['defence']['block_1']['cost']) {
    hse_game["safe"] += 1
    hse_game["cash"] -= hse_game['defence']['block_1']['cost']
    updateAll()
    should_end_game()
      
    }
    
  }
  
  
  
  
  function L2shield() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['defence']['block_2']['cost']) {
    hse_game["safe"] += 2
    hse_game["cash"] -= hse_game['defence']['block_2']['cost']
    updateAll()
    should_end_game()
      
    }
    
  }
  
  
  function mini_boost() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['incomes']['mini_boost']['cost']) {
    
  
    hse_game["income"] += hse_game['incomes']['mini_boost']['boost']
    hse_game["cash"] -= hse_game['incomes']['mini_boost']['cost']
     
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  
  function improved_boost() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['incomes']['improved_boost']['cost']) {
    
  
    hse_game["income"] += hse_game['incomes']['improved_boost']['boost']
    hse_game["cash"] -= hse_game['incomes']['improved_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  function epic_boost() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['incomes']['epic_boost']['cost']) {
    
  
    hse_game["income"] += hse_game['incomes']['epic_boost']['boost']
    hse_game["cash"] -= hse_game['incomes']['epic_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  function pro_boost() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['incomes']['pro_boost']['cost']) {
    
  
    hse_game["income"] += hse_game['incomes']['pro_boost']['boost']
    hse_game["cash"] -= hse_game['incomes']['pro_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  function master_boost() {
    hse_game['turn'] = "P1"
    if (hse_game['cash']>= hse_game['incomes']['master_boost']['cost']) {
    
  
    hse_game["income"] += hse_game['incomes']['master_boost']['boost']
    hse_game["cash"] -= hse_game['incomes']['master_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
    
      
    
   
    }
    
  }
  
  
  
  
  
  
   
    
    
  
  //Give Income
  
  
  function give_income() {
    hse_game['cash'] += hse_game['income']
    hse_game['b-cash'] += hse_game['b-income']
    
    updateAll()
  }
  
  
  
  
  //Bot Turn
  
  function a1() {
    document.querySelector("#win").textContent = ""
    document.querySelector("#turns").textContent = "Player 1's Turn"
    attack_button()
    give_income()
    document.querySelector("#choose").style.display = "block"
  
  }
  
  function run_bot() {
    hse_game["turn"] = "Bot"
    hse_game
    hide_all_b()
    document.querySelector("#choose").style.display = "none"
    document.querySelector("#win").textContent = "The Computer is making its move"
    document.querySelector("#turns").textContent = "Computers Turn"
    document.querySelector("#win").style = "text-align: center; font-size: 40px;"
    setTimeout(run_bot_turn, 1000)
    setTimeout(a1, 1000)
    
  
    
  }
  
  
  
  function run_bot_turn() {
    hide_all_b()
    document.querySelector("#choose").style.display = "none"
    if (hse_game['b-lives'] <= 20) {
       if (hse_game['b-cash'] >= hse_game['attacks']['master_healer']['cost']) {
         bmaster_healer()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['pro_healer']['cost']) {
         
   
           bpro_healer()
          should_end_game()
         
       } else if (hse_game['b-cash'] >= hse_game['attacks']['epic_healer']['cost']) {
         bepic_healer()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['improved_healer']['cost']) {
         bimproved_healer()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['mini_healer']['cost']) {
         bmini_healer()
         should_end_game()
         
       
           
       }
         
       
      
       
         
      
    } else if (hse_game['lives'] <=100){
      if (hse_game['b-cash'] >= hse_game['attacks']['full_auto_rifle']['cost']) {
         bfull_auto_rifle()
         should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['semi_auto_rifle']['cost']) {
         bsemi_auto_rifle()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['fast_firing_shotgun']['cost']) {
         bfiring_shotgun()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['shotgun']['cost']) {
         bshotgun()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['mini_shotgun']['cost']) {
         bmini_shotgun()
          should_end_game()
         
       }
      
    } else {
      if (hse_game['b-cash'] >= hse_game['attacks']['master_boost']['cost']) {
         bmaster_boost()
         should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['pro_boost']['cost']) {
         bpro_boost()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['epic_boost']['cost']) {
         bepic_boost()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['improved_boost']['cost']) {
         bimproved_boost()
          should_end_game()
       } else if (hse_game['b-cash'] >= hse_game['attacks']['mini_boost']['cost']) {
         bmini_boost()
          should_end_game()
         
       }
      
    }
    
   
      
    
    
    
    
   
      
  }
  
  
  
  
  
  
  //Upgrade Functions For Bot
  
  function bmini_shotgun() {
    if (hse_game["safe"] = 0) {
      if (hse_game['b-cash']>= hse_game['attacks']['mini_shotgun']['cost']) {
    hse_game["lives"] = hse_game["b-lives"]-  hse_game['attacks']['mini_shotgun']['damage']
    hse_game["b-cash"] =   hse_game["cash"]- hse_game['attacks']['mini_shotgun']['cost']
    updateAll()
    should_end_game()
      
    }
      
    } else {
      hse_game["safe"] -=1
    }
    
    
  }
    
  function bshotgun() {
    if (hse_game["safe"] = 0) {
      if (hse_game['b-cash']>= hse_game['attacks']['shotgun']['cost']) {
        hse_game["lives"] -= hse_game['attacks']['shotgun']['damage']
        hse_game["b-cash"] -= hse_game['attacks']['shotgun']['cost']
  
        updateAll()
        should_end_game()
   
      
    }
      
    } else {
      hse_game["safe"] -=1
    }
    
    
   
    
  }
  
  
  function bfiring_shotgun() {
    if (hse_game["safe"] = 0)  {
      if (hse_game['b-cash']>= hse_game['attacks']['fast_firing_shotgun']['cost']) {
    hse_game["lives"] -= hse_game['attacks']['fast_firing_shotgun']['damage']
    hse_game["b-cash"] -= hse_game['attacks']['fast_firing_shotgun']['cost']
  
    updateAll()
    should_end_game()
      
    }
      
    }else {
      hse_game["safe"] -=1
    }
    
   
    
  }
  
  function bsemi_auto_rifle() {
    if (hse_game["safe"] = 0) {
    if (hse_game['b-cash']>= hse_game['attacks']['semi_auto_rifle']['cost']) {
    hse_game["lives"] -= hse_game['attacks']['semi_auto_rifle']['damage']
    hse_game["b-cash"] -= hse_game['attacks']['semi_auto_rifle']['cost']
  
    updateAll()
    should_end_game()
      
    }
      
    } else {
      hse_game["safe"] -=1
    }
   
   
    
  }
  
  
  
  function bfull_auto_rifle() {
    if (hse_game["safe"] = 0) {
        if (hse_game['b-cash']>= hse_game['attacks']['full_auto_rifle']['cost']) {
    hse_game["lives"] -= hse_game['attacks']['full_auto_rifle']['damage']
    hse_game["b-cash"] -= hse_game['attacks']['full_auto_rifle']['cost']
  
    updateAll()
    should_end_game()
      
    }
      
    } else {
      hse_game["safe"] -=1
    }
  
   
    
  }
  
  
  //Defence
  
  function bmini_healer() {
    if (hse_game['b-cash']>= hse_game['defence']['mini_healer']['cost']) {
    hse_game["b-lives"] += hse_game['defence']['mini_healer']['heal']
    hse_game["b-cash"] -= hse_game['defence']['mini_healer']['cost']
  
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  function bimproved_healer() {
    if (hse_game['b-cash']>= hse_game['defence']['improved_healer']['cost']) {
    hse_game["b-lives"] += hse_game['defence']['improved_healer']['heal']
    hse_game["b-cash"] -= hse_game['defence']['improved_healer']['cost']
  
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  function bepic_healer() {
    if (hse_game['b-cash']>= hse_game['defence']['epic_healer']['cost']) {
    hse_game["b-lives"] += hse_game['defence']['epic_healer']['heal']
    hse_game["b-cash"] -= hse_game['defence']['epic_healer']['cost']
  
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  function bpro_healer() {
    if (hse_game['b-cash']>= hse_game['defence']['pro_healer']['cost']) {
    hse_game["b-lives"] += hse_game['defence']['pro_healer']['heal']
    hse_game["b-cash"] -= hse_game['defence']['pro_healer']['cost']
  
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  function bmaster_healer() {
    if (hse_game['b-cash']>= hse_game['defence']['master_healer']['cost']) {
    hse_game["b-lives"] += hse_game['defence']['master_healer']['heal']
    hse_game["b-cash"] -= hse_game['defence']['master_healer']['cost']
  
    updateAll()
    should_end_game()
      
    }
   
    
  }
  
  
  
  function bL1shield() {
    if (hse_game['b-cash']>= hse_game['defence']['block_1']['cost']) {
    hse_game["b-safe"] += 1
    hse_game["b-cash"] -= hse_game['defence']['block_1']['cost']
    updateAll()
    should_end_game()
      
    }
    
  }
  
  
  
  
  function bL2shield() {
    if (hse_game['b-cash']>= hse_game['defence']['block_2']['cost']) {
    hse_game["b-safe"] += 2
    hse_game["b-cash"] -= hse_game['defence']['block_2']['cost']
    updateAll()
    should_end_game()
      
    }
    
  }
  
  
  function bmini_boost() {
    if (hse_game['b-cash']>= hse_game['incomes']['mini_boost']['cost']) {
    
  
    hse_game["b-income"] += hse_game['incomes']['mini_boost']['boost']
    hse_game["b-cash"] -= hse_game['incomes']['mini_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  
  function bimproved_boost() {
    if (hse_game['b-cash']>= hse_game['incomes']['improved_boost']['cost']) {
    
  
    hse_game["b-income"] += hse_game['incomes']['improved_boost']['boost']
    hse_game["b-cash"] -= hse_game['incomes']['improved_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  function bepic_boost() {
    if (hse_game['b-cash']>= hse_game['incomes']['epic_boost']['cost']) {
    
  
    hse_game["b-income"] += hse_game['incomes']['epic_boost']['boost']
    hse_game["b-cash"] -= hse_game['incomes']['epic_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  function bpro_boost() {
    if (hse_game['b-cash']>= hse_game['incomes']['pro_boost']['cost']) {
    
  
    hse_game["b-income"] += hse_game['incomes']['pro_boost']['boost']
    hse_game["b-cash"] -= hse_game['incomes']['pro_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
      
    
   
    }
    
  }
  
  
  function bmaster_boost() {
    if (hse_game['b-cash']>= hse_game['incomes']['master_boost']['cost']) {
    
  
    hse_game["b-income"] += hse_game['incomes']['master_boost']['boost']
    hse_game["b-cash"] -= hse_game['incomes']['master_boost']['cost']
    updateAll()
    should_end_game()
    document.querySelector("#turns").textContent = "Your income per round is now " + hse_game['income']
    
      
    
   
    }
    
  }
  
  
  
  
  
  
  
  
  //Chose Caategory Attack
  
  function attack_button() {
    var attack = document.getElementById("attack");
    var defence = document.getElementById("defend")
    var income = document.getElementById("incomes")
    
    attack.style.display = "block"
    defence.style.display = "none"
    income.style.display = "none"
  }
  
  
  function defence_button() {
    var attack = document.getElementById("attack");
    var defence = document.getElementById("defend")
    var income = document.getElementById("incomes")
    
    attack.style.display = "none"
    defence.style.display = "block"
    income.style.display = "none"
    
  }
  
  
  function income_button() {
    var attack = document.getElementById("attack");
    var defence = document.getElementById("defend")
    var income = document.getElementById("incomes")
    
    attack.style.display = "none"
    defence.style.display = "none"
    income.style.display = "block"
    
  }
  
  function hide_all_b() {
    var attack = document.getElementById("attack");
    var defence = document.getElementById("defend")
    var income = document.getElementById("incomes")
    
    attack.style.display = "none"
    defence.style.display = "none"
    income.style.display = "none"
    
    
  }
  
  
  //Reset Button
  function reset_game() {
    attack_button()
    hse_game['lives'] = 100
    hse_game['b-lives'] = 100
    hse_game['cash'] = 850
    hse_game["b-cash"] = 850
    hse_game['income'] = 100
    hse_game['b-income'] = 100
    hse_game['safe'] = 0
    hse_game['b-safe'] = 0
    
    document.querySelector("#player-1-cash").textContent = hse_game['cash'] 
    document.querySelector("#bot-cash").textContent = hse_game["b-cash"]
    document.querySelector("#player-1-lives").textContent = hse_game['lives'] 
    document.querySelector("#bot-lives").textContent = hse_game['b-lives'] 
    document.querySelector("#turns").textContent = "Game Beginning.."
    document.querySelector("#win").textContent = ""
    initiate_game()
  
    
    
  }
  
  
  //Should we end or not
  
  function should_end_game() { 
  
    if ( hse_game["turn"] === "P1" ) {
      if (hse_game['lives']>0 && hse_game['b-lives'] >0) {
         setTimeout(run_bot, 1000)
        
      }
     
      
      
    } 
    if (hse_game["lives"] <=0) {
      hide_all_b()
      document.querySelector("#win").textContent = "Oops, you lost!"
      document.querySelector("#win").style = "text-align: center; font-size:50px; color: red;"
      
            
    } else if (hse_game["b-lives"]<0) {
      hide_all_b()
      document.querySelector("#win").textContent = "Congrats, you won!"
       document.querySelector("#win").style = "text-align: center; font-size:50px; color: green;"
      
      
    }
      
      
    
    
  }
  
  
  
  
  
  
    