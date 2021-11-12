current_version=$(cat web_version)
mkdir -p build

for version in 20*; do
  echo ${version}
  cd ${version}
  npm install
  npm run build
  cd ..

  if [ $version = $current_version ]
  then
    mv ${version}/build/* build/
  else
    mv ${version}/build/ build/${version}/
  fi

  rm -rf ${version}/tmp
  rm -rf ${version}/build
done
