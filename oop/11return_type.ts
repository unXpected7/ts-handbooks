class Bird1 {
    private foot: number = 2;

    getFoot(): number {
        return this.foot;
    }

    fly(): void {
        console.log('flying')
    }

    async eat(): Promise<string> {
        return 'try eating';
    }
}