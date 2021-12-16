function Cell(x, y) {
    this.x = x;
    this.y = y;
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
        return (
            <div className='cell' key = {id} x={cell.x} y={cell.y}></div>
        )
    })

    console.log(cells);

    return (
        <div className='board' style={{ height: size + 'px', width: size + 'px' }}>
            {cells}
        </div>
    )
}
