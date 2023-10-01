<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting Visualizer</title>
    <style>
        /* Add CSS for the bar visualization */
        .bar {
            display: inline-block;
            margin: 2px;
            background-color: blue;
            vertical-align: bottom;
        }
    </style>
</head>
<body>
    <div id="visualization">
        <!-- Bars will be generated here -->
    </div>
    <button onclick="randomizeArray()">Randomize Array</button>
    <button onclick="insertionSort()">Insertion Sort</button>
    <button onclick="bubbleSort()">Bubble Sort</button>
    <button onclick="selectionSort()">Selection Sort</button>
    <button onclick="quickSort()">Quick Sort</button>
    <button onclick="mergeSort()">Merge Sort</button>
    <button onclick="shellSort()">Shell Sort</button>
    <button onclick="changeSize()">Change Size</button>

    <script>
        let array = []; // Array to be sorted
        let bars = document.getElementById('visualization').children; // Bar elements

        // Function to create the bar visualization
        function createBars() {
            for (let i = 0; i < array.length; i++) {
                const bar = document.createElement('div');
                bar.className = 'bar';
                bar.style.height = array[i] + 'px';
                document.getElementById('visualization').appendChild(bar);
            }
        }

        // Function to update the bar visualization
        function updateBars() {
            for (let i = 0; i < bars.length; i++) {
                bars[i].style.height = array[i] + 'px';
            }
        }

        // Function to randomize the array and update the visualization
        function randomizeArray() {
            array = []; // Clear the array
            for (let i = 0; i < bars.length; i++) {
                const height = Math.floor(Math.random() * 200) + 20; // Random height
                array.push(height);
            }
            updateBars();
        }

        // Implement sorting algorithms here 

        // Function to change the size of bars
        function changeSize() {
            const newSize = parseInt(prompt('Enter new bar width:'));
            if (!isNaN(newSize)) {
                for (let i = 0; i < bars.length; i++) {
                    bars[i].style.width = newSize + 'px';
                }
            }
        }

        createBars(); // Initialize the visualization
    </script>
</body>
</html>

