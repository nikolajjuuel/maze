function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.top = false;
    this.right = false;
    this.bottom = false;
    this.left = true;
}



export default function Board(props) {
    const { size } = props;
    const width = 40;
    const colums = Math.floor(size / width);
    const rows = Math.floor(size / width);
    const grid = [];
    let i = 0;

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < colums; y++) {
            const cells = new Cell(x, y);
            grid.push(cells);
        }
    }

    const cells = grid.map((cell) => {
        const id = i += 1;
        const { top, right, bottom, left } = cell;
        const borders = [];
        if (top) {
            borders.push('top');
        }
        if (right) {
            borders.push('right');
        }
        if (bottom) {
            borders.push('bottom');
        }
        if (left) {
            borders.push('left');
        }
        const style = 'cell ' + borders.toString().replaceAll(',',' ');

        return (
            <div className={style} key={id} x={cell.x} y={cell.y} 
            style={{}}>
            </div>
        )
    })

    return (
        <div className='board' style={{ height: size + 'px', width: size + 'px' }}>
            {cells}
        </div>
    )
}
