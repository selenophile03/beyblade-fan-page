
function executeBattleComputation() {

    const arena = document.getElementById('arenaOutput');
    const statusIndicator = document.getElementById('sysStatus');
    
    
    if (!arena || !statusIndicator) return;

 
    statusIndicator.innerHTML = "COMPUTING VECTORS...";
    statusIndicator.style.color = "var(--neon-red)";
    arena.style.color = "#ffffff";
    
   
    arena.innerHTML = `
        <span class="spinning">⚙️</span> 
        <span style="margin-left: 20px; letter-spacing: 1px;">
            CALCULATING HIGH-VELOCITY COLLISIONS...
        </span>
    `;
    
  
    const tacticalOutcomes = [
        { 
            text: "CRITICAL HIT! Dran Sword wins via devastating Burst Finish! 💥", 
            color: "var(--neon-red)" 
        },
        { 
            text: "STAMINA OUT! Cobalt Drake secures victory via central axis equilibrium sleep-out! ⏱️", 
            color: "var(--neon-blue)" 
        },
        { 
            text: "OVER FINISH! Wizard Rod successfully deflects trajectory and sends opponent clear out of bounds! 🚀", 
            color: "var(--neon-green)" 
        },
        { 
            text: "X-TREME DASH COLLISION! Double critical contact yields a Simultaneous Burst draw! ⚡", 
            color: "#ffaa00" 
        }
    ];
    
    
    setTimeout(() => {
       
        const computedResult = tacticalOutcomes[Math.floor(Math.random() * tacticalOutcomes.length)];
        
        
        arena.style.color = computedResult.color;
        arena.innerHTML = computedResult.text;
        
      
        statusIndicator.innerHTML = "STADIUM MATRICES: READY";
        statusIndicator.style.color = "var(--neon-blue)";
    }, 1600);
}
