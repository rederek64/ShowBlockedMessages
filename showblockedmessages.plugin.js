/**
 * @name ShowBlockedMessages
 * @version 1.0.0
 * @donate https://paypal.me/ztbw
 * @source https://github.com/rederek64
 */ 

 class ShowBlockedMessages {

    constructor() {
        this.initialized = false;
    }

    getName() { return "Show Blocked Messages"; }
    getShortName() { return "SBM"; }
    getDescription() { return "Plugin that makes blocked messages visible."; }
    getVersion() { return "1.0.0"; }
    getAuthor() { return "rederek64"; }

    start() {

		const unlockinterval = 100; // refresh time in ms
		
		const PossibleInners = ['Zwiń wiadomość', 'Zwiń wiadomości', 'Collapse message', 'Collapse messages']

		const unlock = () => {
		  
            document.querySelectorAll('.blockedAction-2cPk2G').forEach(button => {
		        if (PossibleInners.includes(button.innerHTML)) return;
		        button.click();
	  	    });

		};

		this.interval = setInterval(unlock, unlockinterval);
		
		this.__started = true;

    }
       
    stop() {
		
		this.__started = false;
		clearInterval(this.interval);
		
    }

    initialize() {
		
        this.initialized = true;
		
    }
	
}