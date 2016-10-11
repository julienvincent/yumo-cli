import Plugins from 'jspm-loader-css/src/plugins.js'
import Loader from 'jspm-loader-css/src/loader.js'
import cssNext from 'postcss-cssnext'
import atImport from 'postcss-import'
import path from 'path';

const isBundling = typeof window === 'undefined';

/**
 * Resolve relative directory path and drop the perceived 'root' of the generated path.
 * The root value is incorrect as it doesn't take into account System.baseURL.
 * The resulting path will be fed into SystemJS for property, full resolution.
 *
 * This still feels overly messy to me. I feel like this work should be handled by
 * normalize if I could only express it correctly.
 */
const getResolvedFilePath = (filePath, relativeToPath) => {
    let resolvedFilePath = filePath;

    if (isBundling && filePath[0] === '.') {
        resolvedFilePath = path.resolve(relativeToPath, filePath)

        /**
         * css.source.input.from is incorrect when building. Need to convert from relative and then drop root
         * so that when giving the path to SystemJS' fetch it works as expected.
         */
        resolvedFilePath = resolvedFilePath.replace(path.parse(resolvedFilePath).root, '')
    }

    return resolvedFilePath;
};

const plugins = [
    atImport(
        {
            resolve(filePath, relativeToPath) {
                const resolvedFilePath = getResolvedFilePath(filePath, relativeToPath)
                const canonicalParent = `${relativeToPath.replace(/^\//, '')}/`

                return System.normalize(resolvedFilePath, `${System.baseURL}${canonicalParent}`)
            },
            load(filename) {
                return window.fetch(filename).then(data => data.text())
            }
        }
    ),
    cssNext(),
    Plugins.values,
    Plugins.localByDefault,
    Plugins.extractImports,
    Plugins.scope,
]

const {fetch, bundle} = new Loader(plugins)
export { fetch, bundle }
