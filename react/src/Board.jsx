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
    if (visited){
        styles.push('visited');
    }

    const style = 'cell ' + styles.toString().replaceAll(',',' ');

    return (
        <div className={style} key={elms.id} id={elms.id} x={elms.x} y={elms.y} ></div>
    )
})







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

    console.log('grid', grid);
    
    const current = grid[0].visited = true;


    console.log(current)
    const cells = draw(grid);





    return (
        <div className='board' style={{ height: size + 'px', width: size + 'px' }}>
            {cells}
        </div>
    )
}
