<?php
declare(strict_types=1);

use Elastic\Adapter\Indices\Mapping;
use Elastic\Adapter\Indices\Settings;
use Elastic\Migrations\Facades\Index;
use Elastic\Migrations\MigrationInterface;

final class CreateFilmsIndex implements MigrationInterface
{
    /**
     * Run the migration.
     */
    public function up(): void
    {
        Index::create('films', function (Mapping $mapping, Settings $settings) {
            $mapping->text('name');
            $mapping->text('title');
            $mapping->keyword('genre');
            $mapping->keyword('country');
        });
        //
    }

    /**
     * Reverse the migration.
     */
    public function down(): void
    {
        Index::dropIfExists('films');
        //
    }
}
