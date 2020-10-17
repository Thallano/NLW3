import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class giftWishes1602969940913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
        name: 'gift',
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
                    scale: 10,
                    precision: 2,
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
        await queryRunner.dropTable('gift');
    }

}
