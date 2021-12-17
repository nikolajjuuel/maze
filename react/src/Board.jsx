function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.id = `${x}${y}`;
    this.top = true;
    this.right = true;
    this.bottom = true;
    this.left = true;
    this.visited = false;
}


const draw = (arr) => arr.map((elms, i) => {
    const { top, right, bottom, left, visited } = elms;
    const styles = [];
    if (top) {
        styles.push('top');
    }
    if (right) {
        styles.push('right');
    }
    if (bottom) {
        styles.push('bottom');
    }
    if (left) {
        styles.push('left');
    }
    if (visited) {
        styles.push('visited');
    }

    const style = 'cell ' + styles.toString().replaceAll(',', ' ');

    return (
        <div className={style} key={elms.id} id={elms.id} x={elms.x} y={elms.y} ></div>
    )
})



function visited(cell) {
    cell.visited = true;
}

function index(x, y, columns) {
    if(x < 0 || y < 0 || x > columns - 1 || y > columns - 1){
        return -1;
    }
    return x + y * columns;
}



export default function Board(props) {
    const { size } = props;
    const width = 40;
    const colums = Math.floor(size / width);
    const rows = Math.floor(size / width);
    const grid = [];

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < colums; y++) {
            const cells = new Cell(x, y);
            grid.push(cells);
        }
    }
    let current = grid[0];

    visited(current);


    const checkNeighbour = (cell) => {
        const { x, y } = cell
        const neighbours = [];
        const top    = grid[index(x,     y - 1, colums)];
        const right  = grid[index(x + 1, y,     colums)];
        const bottom = grid[index(x,     y + 1, colums)];
        const left   = grid[index(x - 1, y,     colums)];

        if(top && !top.visited){
            neighbours.push(top);
        }
        if(right && !right.visited){
            neighbours.push(right);
        }
        if(bottom && !bottom.visited){
            neighbours.push(bottom);
        }
        if(left && !left.visited){
            neighbours.push(left);
        }

    }


    checkNeighbour(current)


    const cells = draw(grid);

    return (
        <div className='board' style={{ height: size + 'px', width: size + 'px' }}>
            {cells}
        </div>
    )
}
