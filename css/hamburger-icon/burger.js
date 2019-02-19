class Shape {
    static get inputProperties() {
        return ['--b-color'];
    }

    paint(context, geometry, properties) {
        let color = properties.get(
            '--b-color'
        );

        context.fillStyle = color;
        context.fillRect(10, 10, 50, 8);
        context.fillRect(10, 26, 50, 8);
        context.fillRect(10, 42, 50, 8);
    }
}

// Register our class under a specific name
registerPaint('burger', Shape);
