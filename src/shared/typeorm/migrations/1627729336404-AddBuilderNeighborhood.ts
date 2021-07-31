import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class AddBuilderNeighborhood1627729336404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'builders',
      new TableColumn({
        name: 'neighborhood_id',
        type: 'uuid',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'builders',
      new TableForeignKey({
        name: 'NeighborhoodBuilder',
        columnNames: ['neighborhood_id'],
        referencedColumnNames: ['neighborhood_id'],
        referencedTableName: 'neighborhoods',
        onDelete: 'SET NULL'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('builders', 'NeighborhoodBuilder');
    await queryRunner.dropColumn('builders', 'neighborhood_id');
  }
}
