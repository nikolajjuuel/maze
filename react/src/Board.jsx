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

const draw = (arr) => arr.map((elms) => {
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
    if (x < 0 || y < 0 || x > columns - 1 || y > columns - 1) {
        return undefined;
    }
    return x + y * columns;
}

let i = 0;

const checkNeighbour = (cell, grid, colums) => {
    visited(cell);

    console.log('cell',cell);

    const { x, y } = cell
    const neighbours = [];
    const top = grid[index(y, x - 1, colums)];
    const right = grid[index(y + 1, x, colums)];
    const bottom = grid[index(y, x + 1, colums)];
    const left = grid[index(y - 1, x, colums)];

    console.log('check neighbour')

    if (top && !top.visited) {
        neighbours.push(top);
    }
    if (right && !right.visited) {
        neighbours.push(right);
    }
    if (bottom && !bottom.visited) {
        neighbours.push(bottom);
    }
    if (left && !left.visited) {
        neighbours.push(left);
    }

    if (neighbours.length > 0) {
        console.log(neighbours)
        const randomNeighbour = Math.floor(Math.random() * neighbours.length);

        checkNeighbour(neighbours[randomNeighbour], grid, colums);

    } else {
        return undefined;
    }
}



export default function Board(props) {
    const { size } = props;
    const width = 40;
    const colums = Math.floor(size / width);
    const rows = Math.floor(size / width);
    const grid = [];
    console.log('board function')

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < colums; y++) {
            const cells = new Cell(x, y);
            grid.push(cells);
        }
    }

    checkNeighbour(grid[0], grid, colums);

    const cells = draw(grid);

    return (
        <div className='board' style={{ height: size + 'px', width: size + 'px' }}>
            {cells}
        </div>
    )
}
