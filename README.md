# openmusic-audio-node-template

> Template for building audio nodes

## Installing and building

Clone the repository, and then copy the files to your own folder.

Install build dependencies, etc with:

```bash
npm install
```

To build a bundle for the demo:

```bash
npm run build
```

Demo files will be placed in `build/`. Open `build/index.html` to access the demo.

Remember to rebuild the bundle each time you make a change to the demo or node code. Alternatively you can also run the `watch` task, so it will watch for file changes and then rebuild the bundle for you:

```bash
npm run watch
```

## Usage

Create an instance of the node by passing it an audio context:

```javascript
var audioContext = new AudioContext();
var audioNode = AudioNode(audioContext);
```

Audio nodes can be connected together like any other Web Audio node:

```javascript
var gainNode = audioContext.createGain();
audioNode.connect(gainNode);
```
