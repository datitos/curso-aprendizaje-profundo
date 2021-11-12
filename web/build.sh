for folder in 20*; do
  echo ${folder}
  (cd ${folder} && npm run build)
  mkdir -p build/${folder} && mv ${folder}/build/* build/${folder}
  rm -r ${folder}/tmp && rm -r ${folder}/build
done
