function create_geometry_5(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            85.102, -45.149, 13.515,
            85.102, -43.149, 13.515,
            85.102, -43.149, 27.685,
            85.102, -43.149, 27.685,
            85.102, -45.149, 27.685,
            85.102, -45.149, 13.515,
            85.102, -43.149, 13.515,
            72.123, -41.058, 13.515,
            72.123, -41.058, 27.685,
            72.123, -41.058, 27.685,
            85.102, -43.149, 27.685,
            85.102, -43.149, 13.515,
            72.123, -41.058, 13.515,
            62.123, -38.509, 13.515,
            62.123, -38.509, 27.685,
            62.123, -38.509, 27.685,
            72.123, -41.058, 27.685,
            72.123, -41.058, 13.515,
            62.123, -38.509, 13.515,
            52.123, -37.694, 13.515,
            52.123, -37.694, 27.685,
            52.123, -37.694, 27.685,
            62.123, -38.509, 27.685,
            62.123, -38.509, 13.515,
            52.123, -37.694, 13.515,
            42.123, -38.509, 13.515,
            42.123, -38.509, 27.685,
            42.123, -38.509, 27.685,
            52.123, -37.694, 27.685,
            52.123, -37.694, 13.515,
            42.123, -38.509, 13.515,
            32.123, -41.058, 13.515,
            32.123, -41.058, 27.685,
            32.123, -41.058, 27.685,
            42.123, -38.509, 27.685,
            42.123, -38.509, 13.515,
            32.123, -41.058, 13.515,
            19.478, -43.149, 13.515,
            19.478, -43.149, 27.685,
            19.478, -43.149, 27.685,
            32.123, -41.058, 27.685,
            32.123, -41.058, 13.515,
            19.478, -43.149, 13.515,
            19.478, -45.149, 13.515,
            19.478, -45.149, 27.685,
            19.478, -45.149, 27.685,
            19.478, -43.149, 27.685,
               19.478, -43.149, 13.515
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.159, 0.987, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.159, 0.987, 0.000,
            0.159, 0.987, 0.000,
            0.203, 0.979, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.165, 0.986, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            -0.205, 0.979, 0.000,
            -0.163, 0.987, 0.000,
            -0.163, 0.987, 0.000,
            -0.163, 0.987, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xD0D0BA,
            shininess: 2.000,
            ambient: 0xD0D0BA,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.478, -45.149, 10.850,
            19.478, -43.149, 10.850,
            32.123, -41.058, 10.850,
            32.123, -41.058, 10.850,
            32.123, -43.058, 10.850,
            19.478, -45.149, 10.850,
            32.123, -43.058, 10.850,
            32.123, -41.058, 10.850,
            42.123, -38.509, 10.850,
            42.123, -38.509, 10.850,
            42.123, -40.509, 10.850,
            32.123, -43.058, 10.850,
            42.123, -40.509, 10.850,
            42.123, -38.509, 10.850,
            52.123, -37.694, 10.850,
            52.123, -37.694, 10.850,
            52.123, -39.694, 10.850,
            42.123, -40.509, 10.850,
            52.123, -39.694, 10.850,
            52.123, -37.694, 10.850,
            62.123, -38.509, 10.850,
            62.123, -38.509, 10.850,
            62.123, -40.509, 10.850,
            52.123, -39.694, 10.850,
            62.123, -40.509, 10.850,
            62.123, -38.509, 10.850,
            72.123, -41.058, 10.850,
            72.123, -41.058, 10.850,
            72.123, -43.058, 10.850,
            62.123, -40.509, 10.850,
            72.123, -43.058, 10.850,
            72.123, -41.058, 10.850,
            85.102, -43.149, 10.850,
            85.102, -43.149, 10.850,
            85.102, -45.149, 10.850,
            72.123, -43.058, 10.850,
            19.478, -45.149, 30.850,
            32.123, -43.058, 30.850,
            32.123, -41.058, 30.850,
            32.123, -41.058, 30.850,
            19.478, -43.149, 30.850,
            19.478, -45.149, 30.850,
            32.123, -43.058, 30.850,
            42.123, -40.509, 30.850,
            42.123, -38.509, 30.850,
            42.123, -38.509, 30.850,
            32.123, -41.058, 30.850,
            32.123, -43.058, 30.850,
            42.123, -40.509, 30.850,
            52.123, -39.694, 30.850,
            52.123, -37.694, 30.850,
            52.123, -37.694, 30.850,
            42.123, -38.509, 30.850,
            42.123, -40.509, 30.850,
            52.123, -39.694, 30.850,
            62.123, -40.509, 30.850,
            62.123, -38.509, 30.850,
            62.123, -38.509, 30.850,
            52.123, -37.694, 30.850,
            52.123, -39.694, 30.850,
            62.123, -40.509, 30.850,
            72.123, -43.058, 30.850,
            72.123, -41.058, 30.850,
            72.123, -41.058, 30.850,
            62.123, -38.509, 30.850,
            62.123, -40.509, 30.850,
            72.123, -43.058, 30.850,
            85.102, -45.149, 30.850,
            85.102, -43.149, 30.850,
            85.102, -43.149, 30.850,
            72.123, -41.058, 30.850,
            72.123, -43.058, 30.850,
            19.478, -45.149, 10.850,
            32.123, -43.058, 10.850,
            32.123, -43.058, 13.515,
            32.123, -43.058, 13.515,
            19.478, -45.149, 13.515,
            19.478, -45.149, 10.850,
            32.123, -43.058, 10.850,
            42.123, -40.509, 10.850,
            42.123, -40.509, 13.515,
            42.123, -40.509, 13.515,
            32.123, -43.058, 13.515,
            32.123, -43.058, 10.850,
            42.123, -40.509, 10.850,
            52.123, -39.694, 10.850,
            52.123, -39.694, 13.515,
            52.123, -39.694, 13.515,
            42.123, -40.509, 13.515,
            42.123, -40.509, 10.850,
            52.123, -39.694, 10.850,
            62.123, -40.509, 10.850,
            62.123, -40.509, 13.515,
            62.123, -40.509, 13.515,
            52.123, -39.694, 13.515,
            52.123, -39.694, 10.850,
            62.123, -40.509, 10.850,
            72.123, -43.058, 10.850,
            72.123, -43.058, 13.515,
            72.123, -43.058, 13.515,
            62.123, -40.509, 13.515,
            62.123, -40.509, 10.850,
            72.123, -43.058, 10.850,
            85.102, -45.149, 10.850,
            85.102, -45.149, 13.515,
            85.102, -45.149, 13.515,
            72.123, -43.058, 13.515,
            72.123, -43.058, 10.850,
            19.478, -45.149, 13.515,
            32.123, -43.058, 13.515,
            32.123, -43.058, 27.685,
            32.123, -43.058, 27.685,
            19.478, -45.149, 27.685,
            19.478, -45.149, 13.515,
            32.123, -43.058, 13.515,
            42.123, -40.509, 13.515,
            42.123, -40.509, 27.685,
            42.123, -40.509, 27.685,
            32.123, -43.058, 27.685,
            32.123, -43.058, 13.515,
            42.123, -40.509, 13.515,
            52.123, -39.694, 13.515,
            52.123, -39.694, 27.685,
            52.123, -39.694, 27.685,
            42.123, -40.509, 27.685,
            42.123, -40.509, 13.515,
            52.123, -39.694, 13.515,
            62.123, -40.509, 13.515,
            62.123, -40.509, 27.685,
            62.123, -40.509, 27.685,
            52.123, -39.694, 27.685,
            52.123, -39.694, 13.515,
            62.123, -40.509, 13.515,
            72.123, -43.058, 13.515,
            72.123, -43.058, 27.685,
            72.123, -43.058, 27.685,
            62.123, -40.509, 27.685,
            62.123, -40.509, 13.515,
            72.123, -43.058, 13.515,
            85.102, -45.149, 13.515,
            85.102, -45.149, 27.685,
            85.102, -45.149, 27.685,
            72.123, -43.058, 27.685,
            72.123, -43.058, 13.515,
            19.478, -45.149, 27.685,
            32.123, -43.058, 27.685,
            32.123, -43.058, 30.850,
            32.123, -43.058, 30.850,
            19.478, -45.149, 30.850,
            19.478, -45.149, 27.685,
            32.123, -43.058, 27.685,
            42.123, -40.509, 27.685,
            42.123, -40.509, 30.850,
            42.123, -40.509, 30.850,
            32.123, -43.058, 30.850,
            32.123, -43.058, 27.685,
            42.123, -40.509, 27.685,
            52.123, -39.694, 27.685,
            52.123, -39.694, 30.850,
            52.123, -39.694, 30.850,
            42.123, -40.509, 30.850,
            42.123, -40.509, 27.685,
            52.123, -39.694, 27.685,
            62.123, -40.509, 27.685,
            62.123, -40.509, 30.850,
            62.123, -40.509, 30.850,
            52.123, -39.694, 30.850,
            52.123, -39.694, 27.685,
            62.123, -40.509, 27.685,
            72.123, -43.058, 27.685,
            72.123, -43.058, 30.850,
            72.123, -43.058, 30.850,
            62.123, -40.509, 30.850,
            62.123, -40.509, 27.685,
            72.123, -43.058, 27.685,
            85.102, -45.149, 27.685,
            85.102, -45.149, 30.850,
            85.102, -45.149, 30.850,
            72.123, -43.058, 30.850,
            72.123, -43.058, 27.685,
            85.102, -45.149, 10.850,
            85.102, -43.149, 10.850,
            85.102, -43.149, 13.515,
            85.102, -43.149, 13.515,
            85.102, -45.149, 13.515,
            85.102, -45.149, 10.850,
            85.102, -45.149, 27.685,
            85.102, -43.149, 27.685,
            85.102, -43.149, 30.850,
            85.102, -43.149, 30.850,
            85.102, -45.149, 30.850,
            85.102, -45.149, 27.685,
            85.102, -39.149, 10.850,
            72.123, -37.058, 10.850,
            72.123, -37.058, 13.515,
            72.123, -37.058, 13.515,
            85.102, -39.149, 13.515,
            85.102, -39.149, 10.850,
            72.123, -37.058, 10.850,
            62.123, -34.509, 10.850,
            62.123, -34.509, 13.515,
            62.123, -34.509, 13.515,
            72.123, -37.058, 13.515,
            72.123, -37.058, 10.850,
            62.123, -34.509, 10.850,
            52.123, -33.694, 10.850,
            52.123, -33.694, 13.515,
            52.123, -33.694, 13.515,
            62.123, -34.509, 13.515,
            62.123, -34.509, 10.850,
            52.123, -33.694, 10.850,
            42.123, -34.509, 10.850,
            42.123, -34.509, 13.515,
            42.123, -34.509, 13.515,
            52.123, -33.694, 13.515,
            52.123, -33.694, 10.850,
            42.123, -34.509, 10.850,
            32.123, -37.058, 10.850,
            32.123, -37.058, 13.515,
            32.123, -37.058, 13.515,
            42.123, -34.509, 13.515,
            42.123, -34.509, 10.850,
            32.123, -37.058, 10.850,
            19.478, -39.149, 10.850,
            19.478, -39.149, 13.515,
            19.478, -39.149, 13.515,
            32.123, -37.058, 13.515,
            32.123, -37.058, 10.850,
            85.102, -39.149, 27.685,
            72.123, -37.058, 27.685,
            72.123, -37.058, 30.850,
            72.123, -37.058, 30.850,
            85.102, -39.149, 30.850,
            85.102, -39.149, 27.685,
            72.123, -37.058, 27.685,
            62.123, -34.509, 27.685,
            62.123, -34.509, 30.850,
            62.123, -34.509, 30.850,
            72.123, -37.058, 30.850,
            72.123, -37.058, 27.685,
            62.123, -34.509, 27.685,
            52.123, -33.694, 27.685,
            52.123, -33.694, 30.850,
            52.123, -33.694, 30.850,
            62.123, -34.509, 30.850,
            62.123, -34.509, 27.685,
            52.123, -33.694, 27.685,
            42.123, -34.509, 27.685,
            42.123, -34.509, 30.850,
            42.123, -34.509, 30.850,
            52.123, -33.694, 30.850,
            52.123, -33.694, 27.685,
            42.123, -34.509, 27.685,
            32.123, -37.058, 27.685,
            32.123, -37.058, 30.850,
            32.123, -37.058, 30.850,
            42.123, -34.509, 30.850,
            42.123, -34.509, 27.685,
            32.123, -37.058, 27.685,
            19.478, -39.149, 27.685,
            19.478, -39.149, 30.850,
            19.478, -39.149, 30.850,
            32.123, -37.058, 30.850,
            32.123, -37.058, 27.685,
            19.478, -43.149, 10.850,
            19.478, -45.149, 10.850,
            19.478, -45.149, 13.515,
            19.478, -45.149, 13.515,
            19.478, -43.149, 13.515,
            19.478, -43.149, 10.850,
            19.478, -43.149, 27.685,
            19.478, -45.149, 27.685,
            19.478, -45.149, 30.850,
            19.478, -45.149, 30.850,
            19.478, -43.149, 30.850,
            19.478, -43.149, 27.685,
            32.123, -41.058, 10.850,
            19.478, -43.149, 10.850,
            19.478, -39.149, 10.850,
            19.478, -39.149, 10.850,
            32.123, -37.058, 10.850,
            32.123, -41.058, 10.850,
            19.478, -43.149, 10.850,
            19.478, -43.149, 13.515,
            19.478, -39.149, 13.515,
            19.478, -39.149, 13.515,
            19.478, -39.149, 10.850,
            19.478, -43.149, 10.850,
            19.478, -43.149, 13.515,
            32.123, -41.058, 13.515,
            32.123, -37.058, 13.515,
            32.123, -37.058, 13.515,
            19.478, -39.149, 13.515,
            19.478, -43.149, 13.515,
            32.123, -41.058, 13.515,
            42.123, -38.509, 13.515,
            42.123, -34.509, 13.515,
            42.123, -34.509, 13.515,
            32.123, -37.058, 13.515,
            32.123, -41.058, 13.515,
            42.123, -38.509, 13.515,
            52.123, -37.694, 13.515,
            52.123, -33.694, 13.515,
            52.123, -33.694, 13.515,
            42.123, -34.509, 13.515,
            42.123, -38.509, 13.515,
            52.123, -37.694, 13.515,
            62.123, -38.509, 13.515,
            62.123, -34.509, 13.515,
            62.123, -34.509, 13.515,
            52.123, -33.694, 13.515,
            52.123, -37.694, 13.515,
            62.123, -38.509, 13.515,
            72.123, -41.058, 13.515,
            72.123, -37.058, 13.515,
            72.123, -37.058, 13.515,
            62.123, -34.509, 13.515,
            62.123, -38.509, 13.515,
            72.123, -41.058, 13.515,
            85.102, -43.149, 13.515,
            85.102, -39.149, 13.515,
            85.102, -39.149, 13.515,
            72.123, -37.058, 13.515,
            72.123, -41.058, 13.515,
            85.102, -43.149, 13.515,
            85.102, -43.149, 10.850,
            85.102, -39.149, 10.850,
            85.102, -39.149, 10.850,
            85.102, -39.149, 13.515,
            85.102, -43.149, 13.515,
            85.102, -43.149, 10.850,
            72.123, -41.058, 10.850,
            72.123, -37.058, 10.850,
            72.123, -37.058, 10.850,
            85.102, -39.149, 10.850,
            85.102, -43.149, 10.850,
            72.123, -41.058, 10.850,
            62.123, -38.509, 10.850,
            62.123, -34.509, 10.850,
            62.123, -34.509, 10.850,
            72.123, -37.058, 10.850,
            72.123, -41.058, 10.850,
            62.123, -38.509, 10.850,
            52.123, -37.694, 10.850,
            52.123, -33.694, 10.850,
            52.123, -33.694, 10.850,
            62.123, -34.509, 10.850,
            62.123, -38.509, 10.850,
            52.123, -37.694, 10.850,
            42.123, -38.509, 10.850,
            42.123, -34.509, 10.850,
            42.123, -34.509, 10.850,
            52.123, -33.694, 10.850,
            52.123, -37.694, 10.850,
            42.123, -38.509, 10.850,
            32.123, -41.058, 10.850,
            32.123, -37.058, 10.850,
            32.123, -37.058, 10.850,
            42.123, -34.509, 10.850,
            42.123, -38.509, 10.850,
            19.478, -43.149, 30.850,
            32.123, -41.058, 30.850,
            32.123, -37.058, 30.850,
            32.123, -37.058, 30.850,
            19.478, -39.149, 30.850,
            19.478, -43.149, 30.850,
            32.123, -41.058, 30.850,
            42.123, -38.509, 30.850,
            42.123, -34.509, 30.850,
            42.123, -34.509, 30.850,
            32.123, -37.058, 30.850,
            32.123, -41.058, 30.850,
            42.123, -38.509, 30.850,
            52.123, -37.694, 30.850,
            52.123, -33.694, 30.850,
            52.123, -33.694, 30.850,
            42.123, -34.509, 30.850,
            42.123, -38.509, 30.850,
            52.123, -37.694, 30.850,
            62.123, -38.509, 30.850,
            62.123, -34.509, 30.850,
            62.123, -34.509, 30.850,
            52.123, -33.694, 30.850,
            52.123, -37.694, 30.850,
            62.123, -38.509, 30.850,
            72.123, -41.058, 30.850,
            72.123, -37.058, 30.850,
            72.123, -37.058, 30.850,
            62.123, -34.509, 30.850,
            62.123, -38.509, 30.850,
            72.123, -41.058, 30.850,
            85.102, -43.149, 30.850,
            85.102, -39.149, 30.850,
            85.102, -39.149, 30.850,
            72.123, -37.058, 30.850,
            72.123, -41.058, 30.850,
            85.102, -43.149, 30.850,
            85.102, -43.149, 27.685,
            85.102, -39.149, 27.685,
            85.102, -39.149, 27.685,
            85.102, -39.149, 30.850,
            85.102, -43.149, 30.850,
            85.102, -43.149, 27.685,
            72.123, -41.058, 27.685,
            72.123, -37.058, 27.685,
            72.123, -37.058, 27.685,
            85.102, -39.149, 27.685,
            85.102, -43.149, 27.685,
            72.123, -41.058, 27.685,
            62.123, -38.509, 27.685,
            62.123, -34.509, 27.685,
            62.123, -34.509, 27.685,
            72.123, -37.058, 27.685,
            72.123, -41.058, 27.685,
            62.123, -38.509, 27.685,
            52.123, -37.694, 27.685,
            52.123, -33.694, 27.685,
            52.123, -33.694, 27.685,
            62.123, -34.509, 27.685,
            62.123, -38.509, 27.685,
            52.123, -37.694, 27.685,
            42.123, -38.509, 27.685,
            42.123, -34.509, 27.685,
            42.123, -34.509, 27.685,
            52.123, -33.694, 27.685,
            52.123, -37.694, 27.685,
            42.123, -38.509, 27.685,
            32.123, -41.058, 27.685,
            32.123, -37.058, 27.685,
            32.123, -37.058, 27.685,
            42.123, -34.509, 27.685,
            42.123, -38.509, 27.685,
            32.123, -41.058, 27.685,
            19.478, -43.149, 27.685,
            19.478, -39.149, 27.685,
            19.478, -39.149, 27.685,
            32.123, -37.058, 27.685,
            32.123, -41.058, 27.685,
            19.478, -43.149, 27.685,
            19.478, -43.149, 30.850,
            19.478, -39.149, 30.850,
            19.478, -39.149, 30.850,
            19.478, -39.149, 27.685,
               19.478, -43.149, 27.685
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.163, -0.987, 0.000,
            0.163, -0.987, 0.000,
            0.205, -0.979, -0.000,
            0.205, -0.979, -0.000,
            0.163, -0.987, -0.000,
            0.163, -0.987, 0.000,
            0.247, -0.969, 0.000,
            0.247, -0.969, 0.000,
            0.165, -0.986, 0.000,
            0.165, -0.986, 0.000,
            0.205, -0.979, -0.000,
            0.247, -0.969, 0.000,
            0.081, -0.997, -0.000,
            0.081, -0.997, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.165, -0.986, 0.000,
            0.081, -0.997, 0.000,
            -0.081, -0.997, 0.000,
            -0.081, -0.997, 0.000,
            -0.165, -0.986, -0.000,
            -0.165, -0.986, -0.000,
            0.000, -1.000, -0.000,
            -0.081, -0.997, -0.000,
            -0.247, -0.969, 0.000,
            -0.247, -0.969, 0.000,
            -0.203, -0.979, -0.000,
            -0.203, -0.979, -0.000,
            -0.165, -0.986, -0.000,
            -0.247, -0.969, 0.000,
            -0.159, -0.987, 0.000,
            -0.159, -0.987, 0.000,
            -0.159, -0.987, 0.000,
            -0.159, -0.987, 0.000,
            -0.203, -0.979, -0.000,
            -0.159, -0.987, 0.000,
            0.163, -0.987, -0.000,
            0.205, -0.979, -0.000,
            0.205, -0.979, -0.000,
            0.205, -0.979, -0.000,
            0.163, -0.987, -0.000,
            0.163, -0.987, -0.000,
            0.205, -0.979, -0.000,
            0.165, -0.986, 0.000,
            0.165, -0.986, -0.000,
            0.165, -0.986, -0.000,
            0.205, -0.979, -0.000,
            0.205, -0.979, -0.000,
            0.165, -0.986, 0.000,
            0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            0.165, -0.986, -0.000,
            0.165, -0.986, 0.000,
            0.000, -1.000, -0.000,
            -0.165, -0.986, -0.000,
            -0.165, -0.986, -0.000,
            -0.165, -0.986, -0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            -0.165, -0.986, -0.000,
            -0.203, -0.979, -0.000,
            -0.203, -0.979, -0.000,
            -0.203, -0.979, -0.000,
            -0.165, -0.986, -0.000,
            -0.165, -0.986, -0.000,
            -0.203, -0.979, -0.000,
            -0.159, -0.987, 0.000,
            -0.159, -0.987, -0.000,
            -0.159, -0.987, -0.000,
            -0.203, -0.979, -0.000,
            -0.203, -0.979, -0.000,
            0.163, -0.987, -0.000,
            0.205, -0.979, -0.000,
            0.163, -0.987, 0.000,
            0.163, -0.987, -0.000,
            0.163, -0.987, -0.000,
            0.163, -0.987, -0.000,
            0.205, -0.979, -0.000,
            0.165, -0.986, -0.000,
            0.247, -0.969, -0.000,
            0.247, -0.969, 0.000,
            0.247, -0.969, 0.000,
            0.205, -0.979, -0.000,
            0.165, -0.986, -0.000,
            -0.000, -1.000, -0.000,
            0.081, -0.997, 0.000,
            0.081, -0.997, -0.000,
            0.081, -0.997, -0.000,
            0.165, -0.986, -0.000,
            -0.000, -1.000, -0.000,
            -0.165, -0.986, -0.000,
            -0.081, -0.997, -0.000,
            -0.081, -0.997, 0.000,
            -0.081, -0.997, 0.000,
            -0.000, -1.000, -0.000,
            -0.165, -0.986, -0.000,
            -0.203, -0.979, -0.000,
            -0.247, -0.969, 0.000,
            -0.247, -0.969, -0.000,
            -0.247, -0.969, -0.000,
            -0.165, -0.986, -0.000,
            -0.203, -0.979, -0.000,
            -0.159, -0.987, -0.000,
            -0.159, -0.987, -0.000,
            -0.159, -0.987, 0.000,
            -0.159, -0.987, 0.000,
            -0.203, -0.979, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.159, 0.987, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.159, 0.987, 0.000,
            0.159, 0.987, 0.000,
            0.203, 0.979, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.165, 0.986, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            -0.205, 0.979, 0.000,
            -0.163, 0.987, 0.000,
            -0.163, 0.987, 0.000,
            -0.163, 0.987, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            0.159, 0.987, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.159, 0.987, 0.000,
            0.159, 0.987, 0.000,
            0.203, 0.979, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.203, 0.979, 0.000,
            0.203, 0.979, 0.000,
            0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.165, 0.986, 0.000,
            0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.165, 0.986, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -0.165, 0.986, 0.000,
            -0.165, 0.986, 0.000,
            -0.205, 0.979, 0.000,
            -0.163, 0.987, 0.000,
            -0.163, 0.987, 0.000,
            -0.163, 0.987, 0.000,
            -0.205, 0.979, 0.000,
            -0.205, 0.979, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x523609,
            shininess: 2.000,
            ambient: 0x523609,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);
}
