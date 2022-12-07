const createFolders = (lines) => {
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

        currentFolder = folders[path]
      }
    } else {
      const fileInfo = line.split(" ")
      if (fileInfo.includes("dir")) {
        currentFolder.children.push(`${currentFolder.path}/${fileInfo[1]}`)
      } else {
        currentFolder.children.push({
          name: fileInfo[1],
          size: parseInt(fileInfo[0], 10),
        })
      }
    }
  }

  Object.keys(folders).forEach((path) => {
    folders[path].totalSize = calculateTotalSize(folders, path)
  })

  return folders
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

const part1 = (lines) => {
  const folders = createFolders(lines)

  const foldersBelowMaxSize = Object.keys(folders).filter(
    (path) => folders[path].totalSize < 100000
  )

  return foldersBelowMaxSize.reduce(
    (total, path) => total + folders[path].totalSize,
    0
  )
}

const part2 = (lines) => {
  const folders = createFolders(lines)

  const unusedSpace = 70000000 - folders["/"].totalSize
  const requiredUnusedSpace = 30000000

  const foldersThatCanBeDeleted = Object.values(folders).filter(
    (folder) => folder.totalSize + unusedSpace > requiredUnusedSpace
  )
  foldersThatCanBeDeleted.sort((a, b) => {
    if (a.totalSize > b.totalSize) {
      return 1
    }
    return -1
  })
  return foldersThatCanBeDeleted[0].totalSize
}

module.exports = {
  part1,
  part2,
}
