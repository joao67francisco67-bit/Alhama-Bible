<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alahama - Cenário 3D</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #000;
        }
        canvas {
            display: block;
        }
    </style>
    <!-- Importing Three.js and OrbitControls -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
</head>
<body>

    <script>
        // 1. Scene, Camera, and Renderer Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87ceeb); // Sky blue background
        scene.fog = new THREE.FogExp2(0x87ceeb, 0.015);

        const camera = new THREE.PerspectiveCamera(
            60, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        camera.position.set(0, 5, 15);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);

        // Controls
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2 - 0.01; // Don't go below ground

        // 2. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xfffaed, 0.8);
        sunLight.position.set(20, 40, 20);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = 100;
        const d = 20;
        sunLight.shadow.camera.left = -d;
        sunLight.shadow.camera.right = d;
        sunLight.shadow.camera.top = d;
        sunLight.shadow.camera.bottom = -d;
        scene.add(sunLight);

        // 3. Environment (Ground & Desert Elements)
        // Ground
        const groundGeo = new THREE.PlaneGeometry(100, 100);
        const groundMat = new THREE.MeshStandardMaterial({ 
            color: 0xd2b48c, 
            roughness: 0.9 
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Simple Ancient Building / Temple Wall
        const wallGeo = new THREE.BoxGeometry(12, 6, 2);
        const wallMat = new THREE.MeshStandardMaterial({ color: 0xc2a649, roughness: 0.8 });
        const wall = new THREE.Mesh(wallGeo, wallMat);
        wall.position.set(0, 3, -8);
        wall.castShadow = true;
        wall.receiveShadow = true;
        scene.add(wall);

        // Columns
        const colGeo = new THREE.CylinderGeometry(0.6, 0.7, 6, 16);
        for(let i = -5; i <= 5; i += 2.5) {
            const col = new THREE.Mesh(colGeo, wallMat);
            col.position.set(i, 3, -6.8);
            col.castShadow = true;
            col.receiveShadow = true;
            scene.add(col);
        }

        // 4. Character (Homem Caixa / Box Man)
        const character = new THREE.Group();

        // Materials
        const skinMat = new THREE.MeshStandardMaterial({ color: 0xffdbac });
        const shirtMat = new THREE.MeshStandardMaterial({ color: 0x3498db });
        const pantsMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 });

        // Head
        const headGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const head = new THREE.Mesh(headGeo, skinMat);
        head.position.y = 2.2;
        head.castShadow = true;
        character.add(head);

        // Body (Torso)
        const bodyGeo = new THREE.BoxGeometry(1, 1.2, 0.6);
        const body = new THREE.Mesh(bodyGeo, shirtMat);
        body.position.y = 1.2;
        body.castShadow = true;
        character.add(body);

        // Left Arm
        const armGeo = new THREE.BoxGeometry(0.3, 1, 0.3);
        const leftArm = new THREE.Mesh(armGeo, shirtMat);
        leftArm.position.set(-0.7, 1.2, 0);
        leftArm.castShadow = true;
        character.add(leftArm);

        // Right Arm
        const rightArm = new THREE.Mesh(armGeo, shirtMat);
        rightArm.position.set(0.7, 1.2, 0);
        rightArm.castShadow = true;
        character.add(rightArm);

        // Left Leg
        const legGeo = new THREE.BoxGeometry(0.4, 1, 0.4);
        const leftLeg = new THREE.Mesh(legGeo, pantsMat);
        leftLeg.position.set(-0.25, 0.5, 0);
        leftLeg.castShadow = true;
        character.add(leftLeg);

        // Right Leg
        const rightLeg = new THREE.Mesh(legGeo, pantsMat);
        rightLeg.position.set(0.25, 0.5, 0);
        rightLeg.castShadow = true;
        character.add(rightLeg);

        // Position character in scene
        character.position.set(0, 0, 0);
        scene.add(character);

        // 5. Window Resize Handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // 6. Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        animate();
    </script>
</body>
</html>
