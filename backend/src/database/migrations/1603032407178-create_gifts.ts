import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createGifts1603032407178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
        name: 'gifts',
            columns: [  
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'wish',
                    type: 'text',
                },
                {
                    name: 'value',
                    type: 'decimal',
                },
            ],
            foreignKeys:[
                {
                    name: 'GiftOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('gifts');
    }

}
