# Essential Database Knowledge

As a fresher, you don't need to master all types of databases, but you should have solid foundational knowledge in the following areas:

## Core SQL Knowledge
- **SQL Fundamentals**: Focus on basic to intermediate SQL queries
- **Practice Resource**: [LeetCode Top SQL 50](https://leetcode.com/studyplan/top-sql-50/) - Excellent for practicing essential SQL queries
- **Key SQL Concepts**:
  - SELECT, WHERE, GROUP BY, HAVING, ORDER BY
  - JOINs (INNER, LEFT, RIGHT, FULL)
  - Subqueries and Common Table Expressions (CTEs) <Badge type="warning" text="IGNORABLE" />
  - Aggregate functions <Badge type="warning" text="IGNORABLE" />

## Essential Database Theories

#### 1. Database Normalization <Badge type="danger" text="IMPORTANT" />
- **Purpose**: Reduce data redundancy and improve data integrity
- **Normal Forms**: Understand 1NF, 2NF, 3NF, and BCNF
- **When to Denormalize**: Performance optimization scenarios

#### 2. Indexing <Badge type="danger" text="IMPORTANT" />
- **Types**: B-tree, Hash, Bitmap indexes
- **When to Use**: Query performance optimization
- **Trade-offs**: Faster reads vs. slower writes and storage overhead
- **Composite Indexes**: Multi-column indexing strategies

#### 3. [ACID Properties](https://medium.com/nerd-for-tech/understanding-acid-properties-in-database-management-98243bfe244c) <Badge type="danger" text="IMPORTANT" />
- **Atomicity**: All operations succeed or none do
- **Consistency**: Database remains in valid state after transactions
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes persist even in system failure

#### 4. Transactions <Badge type="danger" text="IMPORTANT" />
- **Transaction Control**: BEGIN, COMMIT, ROLLBACK
- **Isolation Levels**: Read Uncommitted, Read Committed, Repeatable Read, Serializable
- **Deadlocks**: Detection and prevention strategies

#### 5. ORMs (Object-Relational Mapping) <Badge type="warning" text="IGNORABLE" />
- **Purpose**: Bridge between object-oriented code and relational databases
- **Popular Options**: 
  - Python: SQLAlchemy, Django ORM
  - JavaScript/Node.js: Sequelize, TypeORM
  - Java: Hibernate, JPA
- **Pros and Cons**: Abstraction benefits vs. performance considerations

#### 6. Database Migrations <Badge type="warning" text="IGNORABLE" />
- **Purpose**: Version control for database schema changes
- **Tools**:
  - Alembic (Python)
  - Flyway (Java ecosystem)
  - Prisma Migrate (Node.js)
- **Best Practices**: Rollback strategies and testing migrations

## References
- [LeetCode Top SQL 50](https://leetcode.com/studyplan/top-sql-50/) - **Primary resource for SQL practice**
- [SQLZoo](https://sqlzoo.net/)
- [Use The Index, Luke](https://use-the-index-luke.com/)
