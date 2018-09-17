# This is ArthurSlog.com

## OS Environment: Cent OS 7.0+

1. sudo yum install git

2. cd /usr/local/src/

3. git clone https://github.com/BlessedChild/ArthurSlog.com.git

4. cd ./ArthurSlog.com/client

5. sudo npm i

6. sudo npm run build

6. wait step 6 finished, cd ../server

8. sudo npm i

9. sudo npm i forever -g (Please do this setp if you have not install forever, or you can go on setp 10)

10. ln -s /usr/loacl/src/node-v8/bin/forever /usr/bin (forever will be installed in your nodejs_path/bin/forever, please check your nodejs's path just like /usr/loacl/src/node-v8/bin/forever)

11. forever start ./index.js