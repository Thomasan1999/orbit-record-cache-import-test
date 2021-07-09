import {IndexedDBSource} from '@orbit/indexeddb'
import MemorySource from '@orbit/memory'
import {RecordSchema} from '@orbit/records'

const schema = new RecordSchema({models: {}, version: 1})

// both backup and memory are not used but they both need to be imported to trigger the error

const backup = new IndexedDBSource({
    name: 'backup',
    schema
})

const memory = new MemorySource({
    name: 'memory',
    schema
})
