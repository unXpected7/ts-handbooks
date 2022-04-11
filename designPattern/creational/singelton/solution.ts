namespace SingletonSolution {
    class Me {
        private static instance: Me;
        private firstName: string = '';
        private lastName: string = '';

        public static getInstance(): Me {
            if (!Me.instance) {
                Me.instance = new Me();
            }
            return Me.instance;
        }
        getFullName(): string {
            // access db , select user
            this.firstName = 'John';
            this.lastName = 'Doe';
    
            return `${this.firstName} ${this.lastName}`;
        }
    }
    

    const me = Me.getInstance();
    console.log(me.getFullName());
    
}

