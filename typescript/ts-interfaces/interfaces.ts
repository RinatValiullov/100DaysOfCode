interface Rect {
    readonly id: string
    color?: string
    size: {
        height: number
        width: number
    }
};

let rectangle: Rect = {
    id: 'rect1',
    size: {
        height: 150,
        width: 180
    },
    color: '#ccc'
};

let rectangle1: Rect = {
    id: 'rect2',
    size: {
        height: 100,
        width: 130
    }
};

rectangle1.color = 'green';

let rectangle2 = {} as Rect
let rectangle3 = <Rect>{} // old approach

// inheritance of interfaces
interface RectWithArea extends Rect {
    getArea: () => number
}

let rectangle4: RectWithArea = {
    id: '789',
    size: {
        height: 60,
        width: 80
    },
    getArea(): number {
        return this.size.height * this.size.width;
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}


interface Styles {
    [key: string]: string
}

let css: Styles = {
    border: '1px solid #456',
    marginTop: '2rem',
    color: 'grey'
}
