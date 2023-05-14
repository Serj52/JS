
// Поиск в ширину

class DirectedGraphWorker {

    shorttrack(track, start, end) {
        let list = new Array()
        let searched = new Array()
        let node = [start, [start]]
        list.push(node)
        while (list) {
            node = list.shift()
            let path = node[1]
            let neighbors = track[node[0]]
            for (let i = 0; i <= neighbors.length - 1; i++) {
                let neighbor = neighbors[i]
                if (searched.includes(neighbor)) {
                    continue
                }
                
                let new_path = path.slice(0)
                if (neighbor === end) {
                    console.log('Найден элемент')
                    new_path.push(neighbor)
                    return new_path
                }
                
                new_path.push(neighbor)
                node = [neighbor, new_path]
                list.push(node)
                searched.push(neighbor)
            }
        }
    }
}

let graph = {
}
graph['start'] = ['Arzamas', 'Murom']
graph['Arzamas'] = ['NN']
graph['NN'] = ['end']
graph['Murom'] = ['Abramovo']
graph['Abramovo'] = ['end']
let graphworker = new DirectedGraphWorker()
console.log(graphworker.shorttrack(graph, 'start', 'Abramovo'))
