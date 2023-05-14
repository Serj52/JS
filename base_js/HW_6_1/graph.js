

  // Задаем список смежности графа
const graph = {
    A: { B: 2, C: 1 },
    B: { A: 2, D: 5, E: 3 },
    C: { A: 1, F: 4 },
    D: { B: 5, E: 1 },
    E: { B: 3, D: 1, F: 1 },
    F: { C: 4, E: 1 }
  };
  // Задаем начальную вершину
  const startNode = "A";
  // Создаем объект для хранения кратчайших дистанций до каждой вершины
  const distances = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;
  // Создаем объект для хранения посещенных вершин
  const visited = {};
  // Создаем цикл, который будет искать кратчайшее расстояние до каждой вершины
  while (true) {
    let closestNode = null;
    let shortestDistance = Infinity;
    // Ищем ближайшую вершину, которую еще не посетили
    for (let node in graph) {
      if (!visited[node] && distances[node] < shortestDistance) {
        closestNode = node;
        shortestDistance = distances[node];
      }
    }
    // Если все вершины были посещены, прерываем цикл
    if (closestNode === null) {
      break;
    }
    // Отмечаем вершину как посещенную
    visited[closestNode] = true;
    // Обновляем расстояние до всех смежных вершин
    for (let neighborNode in graph[closestNode]) {
      let distance = graph[closestNode][neighborNode];
      let totalDistance = distances[closestNode] + distance;
      if (totalDistance < distances[neighborNode]) {
        distances[neighborNode] = totalDistance;
      }
    }
  }
  // Выводим кратчайшие расстояния до каждой вершины
  console.log(distances);