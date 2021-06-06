import * as fs from 'fs';
import * as path from 'path';
import format from 'xml-formatter';
import * as xml2js from 'xml2js';

const FILE_SUFFIX = '.profile-meta.xml';

const readFiles = directories => {
  const files = [];
  for (const directory of directories) {
    if (fs.existsSync(directory)) {
      const filesRead = fs.readdirSync(directory).filter(f => path.extname(f) === '.xml');
      for (const fileRead of filesRead) {
        files.push(`${directory}${fileRead}`);
      }
    }
  }
  return files;
};

const getFileNames = (directories, profiles, basepath) => {
  if (profiles) {
    const profilePaths = [];
    for (const profile of profiles) {
      if (profile.indexOf('/') !== -1 || profile.indexOf('\\') !== -1) {
        profilePaths.push((profile.endsWith(FILE_SUFFIX)) ? `${basepath}${profile}` : `${basepath}${profile}${FILE_SUFFIX}`);
      } else {
        for (const directory of directories) {
          profilePaths.push((profile.endsWith(FILE_SUFFIX)) ? `${directory}${profile}` : `${directory}${profile}${FILE_SUFFIX}`);
        }
      }
    }
    return profilePaths;
  } else {
   return readFiles(directories);
  }
};

const getDataForDisplay = (filesModified, startPos, action, metadata) => {
  return filesModified.map(file => {
    return {
      Action: action,
      MetadataType: metadata,
      ProjectFile: file.substring(startPos)
    };
  });
};

const formatMetadata = json => {
  json['Profile'] = Object.keys(json['Profile']).sort().reduce((obj, key) => {
      obj[key] = json['Profile'][key];
      return obj;
  }, {});

  const builder = new xml2js.Builder();
  const xml = builder.buildObject(json);

  const formattedXml = format(xml, {
      indentation: '    ',
      filter: node => node.type !== 'Comment',
      collapseContent: true,
      lineSeparator: '\n'
  });

  return formattedXml;
};

// tslint:disable-next-line: no-any
const getParsed = async (xmlToParse, explicitArray = false): Promise<any> => {
  const p = new xml2js.Parser({ explicitArray });

  return new Promise((resolve, reject) => {
      // tslint:disable-next-line: no-any
      p.parseString(xmlToParse, (err, json: any) => {
          if (err) {
              reject(err);
          } else {
              resolve(json);
          }
      });
  });
};

export {
  getFileNames,
  getDataForDisplay,
  formatMetadata,
  getParsed
};
