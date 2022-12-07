const part1 = (lines) => {
  const root = {
    totalSize: 0,
    children: [],
    parent: null,
    path: "/",
  }
  const folders = {
    "/": root,
  }
  let currentFolder = null
  let path = ""

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line[0] === "$") {
      if (line.includes("cd")) {
        const folderName = line.split("cd ")[1]
        if (folderName === "/") {
          path = "/"
        } else if (folderName === "..") {
          path = path.substring(0, path.lastIndexOf("/"))
          currentFolder = folders[path]
        } else {
          path = `${path}/${folderName}`
        }

        if (!(folderName === "..") && !folders[path]) {
          const newFolder = {
            totalSize: 0,
            children: [],
            path: path,
          }
          folders[path] = newFolder
        }

        if (!(folderName === "..")) {
          currentFolder = folders[path]
        }
      }
    } else {
      let files = []
      while (i < lines.length && lines[i][0] !== "$") {
        files.push(lines[i])
        i++
      }

      files.forEach((file) => {
        const fileInfo = file.split(" ")
        if (fileInfo.includes("dir")) {
          currentFolder.children.push(`${currentFolder.path}/${fileInfo[1]}`)
        } else {
          currentFolder.children.push({
            name: fileInfo[1],
            size: parseInt(fileInfo[0], 10),
          })
        }
      })
      // Hack to prevent double increment when encountering another command
      i--
    }
  }

  Object.keys(folders).forEach((path) => {
    folders[path].totalSize = calculateTotalSize(folders, path)
  })

  const foldersBelowMaxSize = Object.keys(folders).filter(
    (path) => folders[path].totalSize < 100000
  )

  return foldersBelowMaxSize.reduce(
    (total, path) => total + folders[path].totalSize,
    0
  )
}

const calculateTotalSize = (folders, path) => {
  let sum = 0
  folders[path].children.forEach((file) => {
    if (file.size) {
      sum += file.size
    } else {
      sum += calculateTotalSize(folders, file)
    }
  })

  return sum
}

const part2 = (values) => {}

module.exports = {
  part1,
  part2,
}
